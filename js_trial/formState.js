// В этой задаче вам предстоит реализовать форму регистрации. Форма состоит из 4 полей (имя, email, пароль и его подтверждение). Начальный HTML доступен в public/index.html.
//
// Форма должна быть контролируемой. Во время набора данных выполняется валидация сразу всех полей (для простоты). Валидацию нужно построить на базе библиотеки yup. В коде уже описана вся нужная валидация. Осталось только вызвать проверку и записать тексты ошибок в объект состояния.
//
//   Кнопка отправки формы по умолчанию заблокирована. Она разблокируется когда валидна вся форма целиком и блокируется сразу, как только появляется невалидное значение.
//
//   HTML когда введены неправильные email и password (один из возможных вариантов):
//
// <div data-container="sign-up">
//   <form data-form="sign-up" method="post">
//     <div class="form-group">
//       <label for="sign-up-name">Name</label>
//       <input id="sign-up-name" type="text" class="form-control" name="name">
//     </div>
//     <div class="form-group">
//       <label for="sign-up-email">Email<sup>*</sup></label>
//       <!-- Если поле невалидно, то добавляется класс is-invalid -->
//       <input id="sign-up-email" required="" type="email" class="form-control is-invalid" name="email"><div class="invalid-feedback">Value is not a valid email</div>
//     </div>
//     <div class="form-group">
//       <label for="sign-up-password">Password<sup>*</sup></label>
//       <input id="sign-up-password" required="" type="password" class="form-control is-invalid" name="password"><div class="invalid-feedback">Must be at least 6 letters</div>
//     </div>
//     <div class="form-group">
//       <label for="sign-up-password-confirmation">Password Confirmation<sup>*</sup></label>
//       <input id="sign-up-password-confirmation" required="" type="password" class="form-control" name="passwordConfirmation">
//     </div>
//     <input type="submit" class="btn btn-primary" value="Submit" disabled>
//   </form>
// </div>
// После того как все поля введены правильно, данные формы отправляются постом на урл /users. Во время отправки кнопка отправки блокируется (во избежание двойной отправки).
//
// Когда форма отправлена, HTML меняется на следующий:
//
// <div data-container="sign-up">User Created!</div>
// src/application.js
// Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику.
//
// Подсказки
// Документация axios. Он работает очень похоже на fetch.
// Для навигации по DOM-дереву полезно использовать nextElementSibling
// API on-change позволяет получить предыдущее значение
// Текст ошибок может отличаться от примера выше и подставляется самим yup
// Данные формы можно отправлять в любом виде




// @ts-check
/* eslint-disable no-param-reassign, no-console  */

import keyBy from 'lodash/keyBy.js';
import has from 'lodash/has.js';
import isEmpty from 'lodash/isEmpty.js';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';


const routes = {
  usersPath: () => '/users',
};

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().required('email must be a valid email').email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup.string()
    .required('password confirmation is a required field')
    .oneOf(
      [yup.ref('password'), null],
      'password confirmation does not match to password',
    ),
});

const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, 'path');
  }
};

const handleProcessState = (elements, processState) => {
  switch (processState) {
    case 'sent':
      elements.container.innerHTML = 'User Created!';
      break;

    case 'error':
      elements.submitButton.disabled = false;
      break;

    case 'sending':
      elements.submitButton.disabled = true;
      break;

    case 'filling':
      elements.submitButton.disabled = false;
      break;

    default:
      throw new Error(`Unknown process state: ${processState}`);
  }
};

const handleProcessError = () => {
  // вывести сообщение о сетевой ошибке
};

const renderError = (fieldElement, error) => {
  const feedbackElement = fieldElement.nextElementSibling;
  if (feedbackElement) {
    feedbackElement.textContent = error.message;
    return;
  }

  fieldElement.classList.add('is-invalid');
  const newFeedbackElement = document.createElement('div');
  newFeedbackElement.classList.add('invalid-feedback');
  newFeedbackElement.textContent = error.message;
  fieldElement.after(newFeedbackElement);
};

const renderErrors = (elements, errors, prevErrors, state) => {
  Object.entries(elements.fields).forEach(([fieldName, fieldElement]) => {
    const error = errors[fieldName];
    const fieldHadError = has(prevErrors, fieldName);
    const fieldHasError = has(errors, fieldName);
    if (!fieldHadError && !fieldHasError) {
      return;
    }

    if (fieldHadError && !fieldHasError) {
      fieldElement.classList.remove('is-invalid');
      fieldElement.nextElementSibling.remove();
      return;
    }

    if (state.form.fieldsUi.touched[fieldName] && fieldHasError) {
      renderError(fieldElement, error);
    }
  });
};

const render = (elements, initialState) => (path, value, prevValue) => {
  switch (path) {
    case 'form.processState':
      handleProcessState(elements, value);
      break;

    case 'form.processError':
      handleProcessError();
      break;

    case 'form.valid':
      elements.submitButton.disabled = !value;
      break;

    case 'form.errors':
      renderErrors(elements, value, prevValue, initialState);
      break;

    default:
      break;
  }
};

export default () => {
  const elements = {
    container: document.querySelector('[data-container="sign-up"]'),
    form: document.querySelector('[data-form="sign-up"]'),
    fields: {
      name: document.getElementById('sign-up-name'),
      email: document.getElementById('sign-up-email'),
      password: document.getElementById('sign-up-password'),
      passwordConfirmation: document.getElementById('sign-up-password-confirmation'),
    },
    submitButton: document.querySelector('input[type="submit"]'),
  };

  const initialState = {
    form: {
      valid: true,
      processState: 'filling',
      processError: null,
      errors: {},
      fields: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      fieldsUi: {
        touched: {
          name: false,
          email: false,
          password: false,
          passwordConfirmation: false,
        },
      },
    },
  };
  const state = onChange(initialState, render(elements, initialState));
  Object.entries(elements.fields).forEach(([fieldName, fieldElement]) => {
    fieldElement.addEventListener('input', (e) => {
      const { value } = e.target;
      state.form.fields[fieldName] = value;
      state.form.fieldsUi.touched[fieldName] = true;
      const errors = validate(state.form.fields);
      state.form.errors = errors;
      state.form.valid = isEmpty(errors);
    });
  });

  elements.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    state.form.processState = 'sending';
    state.form.processError = null;

    try {
      const data = {
        name: state.form.fields.name,
        email: state.form.fields.email,
        password: state.form.fields.password,
      };
      await axios.post(routes.usersPath(), data);
      state.form.processState = 'sent';
    } catch (err) {
      state.form.processState = 'error';
      state.form.processError = errorMessages.network.error;
      throw err;
    }
  });
};
