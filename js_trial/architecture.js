//  Состояние отображения (UI State)
// 
// В этой практике вам нужно будет реализовать Collapse
//
// src/application.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список компаний (пример списка в файле src/index.js) и использует этот список для формирования кнопок (по одной на каждую компанию). Нажатие на кнопку приводит к выводу описания компании (если есть описание другой компании, оно заменяется). Повторное нажатие удаляет вывод. Данные должны полностью удаляться, скрытие с помощью классов не подходит. По умолчанию не показывается никакое описание.
//
//   Пример начального вывода (может отличаться от вашего):
//
// <div class="container m-3">
//   <button class="btn btn-primary">
//     Hexlet
//   </button>
//   <button class="btn btn-primary">
//     Google
//   </button>
//   <button class="btn btn-primary">
//     Facebook
//   </button>
// </div>
// После клика на второй кнопке добавляется описание:
//
//   <div class="container m-3">
//     <button class="btn btn-primary">
//       Hexlet
//     </button>
//     <button class="btn btn-primary">
//       Google
//     </button>
//     <button class="btn btn-primary">
//       Facebook
//     </button>
//     <div>search engine</div>
//   </div>
// После клика на третьей кнопке описание заменяется на новое:
//
//   <div class="container m-3">
//     <button class="btn btn-primary">
//       Hexlet
//     </button>
//     <button class="btn btn-primary">
//       Google
//     </button>
//     <button class="btn btn-primary">
//       Facebook
//     </button>
//     <div>social network</div>
//   </div>
// После повторного клика на третьей кнопке описание удаляется:
//
//   <div class="container m-3">
//     <button class="btn btn-primary">
//       Hexlet
//     </button>
//     <button class="btn btn-primary">
//       Google
//     </button>
//     <button class="btn btn-primary">
//       Facebook
//     </button>
//   </div>

// мое
/* eslint-disable no-param-reassign */
// @ts-check

// BEGIN (write your solution here) (write your solution here)
export default (companies) => {
  const container = document.querySelector('.container');
  const state = {
    'companies': companies,
    uiState: {
      accordion: [
        { companyId: 1, visibility: 'hidden' },
        { companyId: 2, visibility: 'hidden' },
        { companyId: 3, visibility: 'hidden' },
      ],
    },
  };
  state.companies.forEach((el) => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.setAttribute('id', el.id);
    button.textContent = el.name;
    container.append(button);
  });

  const buttons = document.querySelectorAll('button');

  buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
      state.uiState.accordion.map((el) => {
        if (Number(e.target.id) !== el.companyId) {
          el.visibility = 'hidden';
        }
        if (Number(e.target.id) === el.companyId) {
          if (el.visibility === 'hidden') {
            el.visibility = 'show';
          } else {
            el.visibility = 'hidden';
          }
        }
        return null;
      });
      if (container.lastChild.classList.value === 'description') {
        container.removeChild(container.lastChild);
      }
      state.companies.forEach((el) => {
        const description = document.createElement('div');
        description.classList.add('description');
        const companyUiState = state.uiState.accordion.find(({ companyId }) => Number(el.id) === companyId);
        const { visibility } = companyUiState;
        if (visibility === 'show') {
          description.textContent = el.description;
          container.append(description);
        }
      });
    });
  });
};
// END


// училетя

/* eslint-disable no-param-reassign */
// @ts-check

// BEGIN (write your solution here)
const render = (state, container) => {
  container.innerHTML = '';
  const buttons = state.companies.map(({ id, name }) => {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = name;
    button.addEventListener('click', () => {
      const nextSelectedId = state.uiState.selectedCompanyId === id ? null : id;
      state.uiState.selectedCompanyId = nextSelectedId;
      render(state, container);
    });
    return button;
  });

  container.append(...buttons);

  if (state.uiState.selectedCompanyId === null) {
    return;
  }

  const outputContainer = document.createElement('div');
  const selectedCompany = state.companies.find((c) => c.id === state.uiState.selectedCompanyId);
  outputContainer.textContent = selectedCompany.description;
  container.append(outputContainer);
};

export default (companies) => {
  const state = {
    companies,
    uiState: {
      selectedCompanyId: null,
    },
  };

  const container = document.querySelector('.container');

  render(state, container);
};
// END


// Комплексное состояние
// 
// src/application.js
// Реализуйте и экспортируйте функцию по умолчанию, которая создает на странице TODO-приложение. Это приложение состоит из формы добавления (уже есть на странице) и списка задач добавленных через форму. Каждая новая задача выводится первой в списке добавленных ранее задач.
//
//   Начальный HTML:
//
//   <div class="container m-3">
//     <form class="form-inline">
//       <input type="text" required="required" class="form-control mr-3" name="name">
//         <button type="submit" class="btn btn-primary mr-3">add</button>
//     </form>
//     <ul id="tasks" class="list-group" aria-label="Tasks"></ul>
//   </div>
// После добавления двух задач:
//
// <div class="container m-3">
//   <form class="form-inline">
//     <input type="text" required="required" class="form-control mr-3" name="name">
//       <button type="submit" class="btn btn-primary mr-3">add</button>
//   </form>
//   <ul id="tasks" class="list-group" aria-label="Tasks">
//     <li class="list-group-item">Вторая задача</li>
//     <li class="list-group-item">Первая задача</li>
//   </ul>
// </div>
// У нашего TODO-приложения есть бэкенд. Этот бэкенд умеет получать новые задачи и возвращать список ранее добавленных задач.
//
// import axios from 'axios';
//
// // Список добавленных задач GET
// const response = await axios.get(routes.tasksPath());
// // response.data содержит объект: { items: [{ name: 'имя задачи' }, { ... }]  }
//
// // Добавление новой задачи POST
// const response = await axios.post(routes.tasksPath(), data); // Где data это { name: 'имя задачи' }
// // response.status содержит 201 в случае успеха
// Во время инициализации (внутри функции), приложение должно делать запрос на сервер, извлекать оттуда уже добавленные задачи и выводить их на экран. Во время добавления новой задачи, приложение должно выполнять запрос на добавление задачи на сервер.
//


// учителя

/* eslint-disable no-param-reassign */
// @ts-check

import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

// BEGIN
const render = (state, { form, input, tasksContainer }) => {
  form.reset();
  input.focus();
  const tasksElements = state.tasks.map((task) => {
    const el = document.createElement('li');
    el.classList.add('list-group-item');
    el.textContent = task.name;
    return el;
  });

  tasksContainer.replaceChildren(...tasksElements);
};

const app = async () => {
  const response = await axios.get(routes.tasksPath());

  const state = {
    tasks: response.data.items,
  };

  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const tasksContainer = document.querySelector('#tasks');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
    };
    try {
      await axios.post(routes.tasksPath(), data);
      state.tasks.unshift(data);
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }

    render(state, { form, input, tasksContainer });
  });

  render(state, { form, input, tasksContainer });
};

export default app;
// END
//
// Состояние приложения

// В этом задании необходимо реализовать простой калькулятор, который умеет только складывать. Но делает это для любого количества чисел, а не только двух.
//
//   src/application.js
// Реализуйте и экспортируйте по умолчанию функцию, реализующую приложение "суммирующий калькулятор". Калькулятор представляет из себя одно поле для ввода чисел и две кнопки: сложение и сброс. Под калькулятором выводится текущая сумма, которая изначально равна нулю. Каждое нажатие кнопки plus добавляет к этой сумме введенное значение. Нажатие кнопки сброс возвращает состояние к первоначальному (сумма устанавливается в 0).
//
// Сделайте калькулятор дружественным пользователю: устанавливайте фокус на поле для ввода при каждой отрисовке формы (включая первую) и очищайте форму после отправки/очистки.
//
//   Подсказки
// Данные из формы приходят в виде текста. Для преобразования строки в число используйте parseInt()
// form.reset()
// input.focus()


// учител

/* eslint-disable no-param-reassign */
// @ts-check

// BEGIN
// повторяющийся код удобно вынести в отдельную функцию
const render = (state, formEl, inputEl, resultEl) => {
  formEl.reset();
  inputEl.focus();
  resultEl.textContent = state;
};

export default () => {
  // состояние относится к уровню приложения
  let state = 0;

  const formEl = document.querySelector('form');
  const inputEl = document.querySelector('input[type=number]');
  const resetEl = document.querySelector('button');
  const resultEl = document.querySelector('#result');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    state += parseInt(data.get('number'), 10);
    render(state, formEl, inputEl, resultEl);
  });

  resetEl.addEventListener('click', () => {
    state = 0;
    render(state, formEl, inputEl, resultEl);
  });

  inputEl.focus();
};
// END

// Отрисовка (рендеринг) состояния
// 
// src/application.js
// Реализуйте и экспортируйте функцию по умолчанию, которая активизирует фильтр на основе формы доступной в public/index.html. Изменение любого параметра должно сразу приводить к фильтрации. Ноутбуки, подходящие под фильтр, выводятся внутри <div class="result"></div> как список ul/li моделей (свойство model внутри объекта представляющего ноутбук). Полный список ноутбуков доступен в файле src/index.js.
//
//   Условия:
//
// Если фильтр пустой, то выводится все.
//   Если под фильтр ничего не подходит, то список не выводится.
//   Подсказки
// Для отслеживания изменений текстовых инпутов используйте событие input. Для select - change.
//   Для фильтрации товаров по выбранным фильтрам используйте метод массива every()
// На старте фильтры не указаны, поэтому должен отрисовываться весь список


// мое

// @ts-check

// BEGIN (write your solution here) (write your solution here)

const compare = (state, value, defaultValue = '') => state === defaultValue || state === value;

const valueInRange = (min, max, value) => {
  if (!min && !max) {
    return true;
  }
  if (!min) {
    return value < max;
  }
  if (!max) {
    return value > min;
  }
  return max >= value && min <= value;
};

const defaultState = {
  processor: '', frequencyMin: '', memory: '', frequencyMax: '',
};

export default (coll) => {
  const state = { ...defaultState };

  const result = document.querySelector('.result');
  const processor = document.querySelector('select[name="processor_eq"]');
  const memory = document.querySelector('select[name="memory_eq"]');
  const frequencyGte = document.querySelector('input[name="frequency_gte"]');
  const frequencyLte = document.querySelector('input[name="frequency_lte"]');

  const render = (list) => {
    result.innerHTML = '';

    const newItems = list.map((el) => {
      if (compare(state.processor, el.processor)
        && compare(state.memory, el.memory)
        && valueInRange(state.frequencyMin, state.frequencyMax, el.frequency)) {
        const li = document.createElement('li');
        li.textContent = el.model;
        return li;
      }
      return null;
    }).filter(Boolean);

    if (newItems.length) {
      const ul = document.createElement('ul');

      ul.append(...newItems);
      result.append(ul);
    }
  };

  render(coll);

  processor.addEventListener('change', (e) => {
    state.processor = e.target.value;
    render(coll);
  });
  memory.addEventListener('change', (e) => {
    if (e.target.value === '') {
      state.memory = e.target.value;
    } else {
      state.memory = parseInt(e.target.value, 10);
    }
    render(coll);
  });
  frequencyGte.addEventListener('input', (e) => {
    state.frequencyMin = parseInt(e.target.value, 10);
    render(coll);
  });
  frequencyLte.addEventListener('input', (e) => {
    state.frequencyMax = parseInt(e.target.value, 10);
    render(coll);
  });
};
// END


// учитель

// @ts-check

// BEGIN (write your solution here)
// Решение позволяет легко расширить приложение новыми фильтрами и типами проверок
const predicates = {
  eq: (value) => (el) => String(el) === String(value),
  gte: (value) => (el) => (el) >= Number(value),
  lte: (value) => (el) => (el) <= Number(value),
};

const inputsConfig = {
  processor_eq: 'change',
  memory_eq: 'change',
  frequency_lte: 'input',
  frequency_gte: 'input',
};

const filterItems = (items, query) => {
  // Остаются только изменённые пользователем фильтры
  const activeFilters = Object.entries(query).filter(([, filterValue]) => filterValue !== null);
  // Фильтрация товаров: каждый товар должен удовлетворять каждому фильтру из списка
  return items.filter((item) => activeFilters.every(([filterName, filterValue]) => {
    const [propertyName, predicate] = filterName.split('_');
    const match = predicates[predicate];
    const itemProperty = item[propertyName];
    return match(filterValue)(itemProperty);
  }));
};

const render = (state) => {
  const resultElement = document.querySelector('.result');
  const filtered = filterItems(state.laptops, state.filter);

  if (filtered.length === 0) {
    resultElement.innerHTML = '';
    return;
  }
  // элементы для вставки можно как создать через интерфейс document.createElement,
  // так и собрать строку
  const html = `<ul>${filtered.map((item) => `<li>${item.model}</li>`).join('')}</ul>`;
  resultElement.innerHTML = html;
};

export default (laptops) => {
  // state на уровне приложения
  const state = {
    laptops,
    filter: {
      processor_eq: null,
      memory_eq: null,
      frequency_lte: null,
      frequency_gte: null,
    },
  };
  // На каждое поле ввода вешается обработчик, изменяющий стейт и вызывающий отрисовку
  Object.entries(inputsConfig).forEach(([inputName, eventName]) => {
    const input = document.querySelector(`[name="${inputName}"]`);
    input.addEventListener(eventName, ({ target }) => {
      state.filter[inputName] = target.value === '' ? null : target.value;
      render(state);
    });
  });
  render(state);
};
// END

// Процессы и автоматы, их описывающие
// Эта задача не сложная алгоритмически, но довольно объемная. На решение потребуется время и это хорошая прокачка.
//
//   Некоторые интерфейсы допускают редактирование "по месту" (in-place). Это значит, что для обновления значений каких-то данных не нужно переходить на отдельную страницу редактирования, достаточно кликнуть на сам элемент (или кнопку рядом с ним) как появится форма для изменения конкретно этого значения.
//
//   В данной практике нужно построить именно такой интерфейс. Он работает по следующему принципу. Контейнер внутри которого находятся данные для редактирования, помечается специальным аттрибутом: data-editable-target. Значением этого атрибута является имя поля. В нашем примере это name и email (исходник доступен в public/index.html). Начальный HTML выглядит так:
//
// <div data-editable-target="name"><i>name</i></div>
// <div data-editable-target="email"><i>email</i></div>
// Когда происходит клик на этом элементе, то он заменяется на форму
//
// Пример формы для сохранения name:
//
//   <div data-editable-target="name">
//     <form>
//       <!-- Лейбл привязывается к инпуту через аргумент for -->
//       <!-- Всегда полезно указывать лейблы для контроллеров. Благодаря им, различные системы находят элементы управления -->
//       <label class="sr-only" for="name">name</label>
//       <!-- С точки зрения хорошего UX нужно фокусироваться (это позволяет использовать клавиатуру сразу) на этом инпуте и выделять текст внутри него -->
//       <!-- Исключение составляет ситуация, когда поле пустое (но отражается текст выделенный курсивом как в примере выше) -->
//       <input type="text" id="name" name="name" value="">
//         <!-- Кнопка сабмита имеет текст "Save name" для сохранения имени. Для сохранения емейла должен быть текст "Save email" -->
//         <input type="submit" value="Save name">
//     </form>
//   </div>
// Пример формы для сохранения email:
//
// <div data-editable-target="email">
//   <form>
//     <label class="sr-only" for="email">email</label>
//     <input type="text" id="email" name="email" value="">
//       <input type="submit" value="Save email">
//   </form>
// </div>
// Затем пользователь может изменить значение и сохранить его. Повторный клик снова открывает форму для редактирования, в которой окажется то значение, которое вбил пользователь.
//
// Предположим что мы набрали значение "Cat". Тогда после отправки формы этот див станет таким:
//
// <div data-editable-target="name">
//   Cat
// </div>
// Если значение стирается, то тогда текст меняется на первоначальный (и добавляется курсив), такой какой он был до любых изменений:
//
// <div data-editable-target="name"><i>name</i></div>
// <div data-editable-target="email"><i>email</i></div>
// src/application.js
// Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику. По необходимости создайте дополнительные функции на уровне модуля.
//
// Подсказки
// Каждое поле обрабатывается независимо и каждому понадобится свое собственное состояние.
// Код отвечающий за изменение DOM не может менять состояние.
// Обработчики не могут напрямую менять DOM. Это делает функция render.
// dataset


// учитель

// @ts-check
/* eslint-disable no-param-reassign */

// BEGIN (write your solution here)
const render = (state, element) => {
  const elementName = element.dataset.editableTarget;
  element.innerHTML = '';

  const buildText = () => {
    if (state.value === '') {
      const i = document.createElement('i');
      i.textContent = elementName;
      return i;
    }

    return document.createTextNode(state.value);
  };

  const buildForm = () => {
    const form = document.createElement('form');
    const label = document.createElement('label');
    label.setAttribute('for', elementName);
    label.classList.add('sr-only');
    label.textContent = elementName;
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', elementName);
    input.setAttribute('id', elementName);
    input.setAttribute('value', state.value);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', `Save ${elementName}`);
    form.append(label, input, submit);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const value = formData.get(elementName).trim();
      state.value = value;
      state.mode = 'text';
      render(state, element);
    });

    return { form, input };
  };

  switch (state.mode) {
    case 'text': {
      const text = buildText();
      element.append(text);
      break;
    }
    case 'form': {
      const { form, input } = buildForm();
      element.append(form);
      input.select();
      break;
    }
    default:
      // https://ru.hexlet.io/blog/posts/sovershennyy-kod-defolty-v-svitchah
      throw new Error(`Unknown mode: ${state.mode}`);
  }
};

export default () => {
  const elements = document.querySelectorAll('[data-editable-target]');
  // у каждого элемента свой стейт. Можно добавлять новые элементы с data-editabe-target в HTML,
  // не меняя код
  elements.forEach((element) => {
    const state = {
      // состояние приложения определено в виде состояний конечного автомата вместо флагов
      mode: 'text',
      value: '',
    };

    element.addEventListener('click', () => {
      if (state.mode === 'text') {
        state.mode = 'form';
        render(state, element);
      }
    });
  });
};
// END


// Нормализация данных
// Эта задача не сложная алгоритмически, но довольно объемная. На решение потребуется время и это хорошая прокачка
//
// В этой задаче вам предстоит сделать список задач похожий на Reminders из MacOS. Reminder позволяет планировать задачи и создавать списки задач. По умолчанию, в нашей реализации сразу должен быть создан список General. Начальный HTML доступен в public/index.html. После инициализации js он становится таким (туда добавляется General):
//
// <div class="row">
//   <div class="col">
//     <h3>Lists</h3>
//     <form class="form-inline mb-2" data-container="new-list-form">
//       <label for="new-list-name" class="sr-only">New list name</label>
//       <input
//         type="text"
//         id="new-list-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add List" />
//     </form>
//     <div data-container="lists">
//       <ul>
//         <li><b>General</b></li>
//       </ul>
//     </div>
//   </div>
//   <div class="col">
//     <h3>Tasks</h3>
//     <form class="form-inline mb-2" data-container="new-task-form">
//       <label for="new-task-name" class="sr-only">New task name</label>
//       <input
//         type="text"
//         id="new-task-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add Task" />
//     </form>
//     <div data-container="tasks"></div>
//   </div>
// </div>
// После добавления первой задачи в список General:
//
//   <div class="row">
//     <div class="col">
//       <h3>Lists</h3>
//       <form class="form-inline mb-2" data-container="new-list-form">
//         <label for="new-list-name" class="sr-only">New list name</label>
//         <input
//           type="text"
//           id="new-list-name"
//           class="form-control mr-2"
//           name="name"
//           required
//         />
//         <input type="submit" class="btn btn-primary" value="Add List" />
//       </form>
//       <div data-container="lists">
//         <ul>
//           <li><b>General</b></li>
//         </ul>
//       </div>
//     </div>
//     <div class="col">
//       <h3>Tasks</h3>
//       <form class="form-inline mb-2" data-container="new-task-form">
//         <label for="new-task-name" class="sr-only">New task name</label>
//         <input
//           type="text"
//           id="new-task-name"
//           class="form-control mr-2"
//           name="name"
//           required
//         />
//         <input type="submit" class="btn btn-primary" value="Add Task" />
//       </form>
//       <div data-container="tasks">
//         <ul>
//           <li>My First Task</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// После создания нового списка (но до переключения на него):
//
// <div class="row">
//   <div class="col">
//     <h3>Lists</h3>
//     <form class="form-inline mb-2" data-container="new-list-form">
//       <label for="new-list-name" class="sr-only">New list name</label>
//       <input
//         type="text"
//         id="new-list-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add List" />
//     </form>
//     <div data-container="lists">
//       <ul>
//         <li><b>General</b></li>
//         <li><a href="#random">Random</a></li>
//       </ul>
//     </div>
//   </div>
//   <div class="col">
//     <h3>Tasks</h3>
//     <form class="form-inline mb-2" data-container="new-task-form">
//       <label for="new-task-name" class="sr-only">New task name</label>
//       <input
//         type="text"
//         id="new-task-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add Task" />
//     </form>
//     <div data-container="tasks">
//       <ul>
//         <li>My First Task</li>
//       </ul>
//     </div>
//   </div>
// </div>
// После переключения на список Random (клик по имени):
//
// <div class="row">
//   <div class="col">
//     <h3>Lists</h3>
//     <form class="form-inline mb-2" data-container="new-list-form">
//       <label for="new-list-name" class="sr-only">New list name</label>
//       <input
//         type="text"
//         id="new-list-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add List" />
//     </form>
//     <div data-container="lists">
//       <ul>
//         <li><a href="#general">General</a></li>
//         <li><b>Random</b></li>
//       </ul>
//     </div>
//   </div>
//   <div class="col">
//     <h3>Tasks</h3>
//     <form class="form-inline mb-2" data-container="new-task-form">
//       <label for="new-task-name" class="sr-only">New task name</label>
//       <input
//         type="text"
//         id="new-task-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add Task" />
//     </form>
//     <div data-container="tasks"></div>
//   </div>
// </div>
// Списки должны иметь уникальные имена. Добавление списка с уже существующим именем не должно производить никакого эффекта.
//
//   src/application.js
// Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику.

// мое

// @ts-check
/* eslint-disable no-param-reassign */

import uniqueId from 'lodash/uniqueId.js';

// BEGIN (write your solution here)
const render = (state) => {
  const lists = document.querySelector('[data-container="lists"]');
  const tasks = document.querySelector('[data-container="tasks"]');
  lists.innerHTML = '';
  tasks.innerHTML = '';
  const ulList = document.createElement('ul');
  lists.append(ulList);
  state.lists.forEach((el) => {
    const list = document.createElement('b');
    const href = document.createElement('a');
    const liList = document.createElement('li');
    href.setAttribute('href', `#${(el.value).toLowerCase()}`);
    href.textContent = el.value;
    list.textContent = el.value;
    if (el.active === true) {
      liList.append(list);
    } else {
      liList.append(href);
    }
    ulList.append(liList);
  });
  const col = state.tasks.filter((el) => {
    const { id: curentId } = state.lists.find((item) => item.active === true);
    return el.listId === curentId;
  });
  if (col.length) {
    const ulTask = document.createElement('ul');
    tasks.append(ulTask);
    col.forEach((el) => {
      const liTask = document.createElement('li');
      liTask.textContent = el.value;
      ulTask.append(liTask);
    });
  }
  const tab = document.querySelectorAll('a');
  tab.forEach((el) => {
    el.addEventListener('click', (e) => {
      const { id: curentId } = state.lists.find((item) => item.value === e.target.textContent);
      state.lists.forEach((element) => {
        if (element.id === curentId) {
          element.active = true;
        } else {
          element.active = false;
        }
      });
      render(state);
    });
  });
};

export default () => {
  const state = {
    lists: [
      { value: 'General', id: `${uniqueId()}`, active: true },
    ],
    tasks: [
    ],
  };
  render(state);
  const listForm = document.querySelector('[data-container="new-list-form"]');
  const listName = listForm.querySelector('#new-list-name');
  const addList = listForm.querySelector('.btn');
  const taskForm = document.querySelector('[data-container="new-task-form"]');
  const taskName = taskForm.querySelector('#new-task-name');
  const addTask = taskForm.querySelector('.btn');
  addList.addEventListener('click', (e) => {
    e.preventDefault();
    const curentValue = listName.value.trim();
    if (curentValue.length) {
      const find = state.lists.find((item) => item.value === curentValue);
      let newList;
      if (!find) {
        newList = { value: curentValue, id: `${uniqueId()}`, active: false };
        state.lists.push(newList);
        listName.value = '';
        render(state);
      } else {
        listName.value = '';
      }
    }
  });
  addTask.addEventListener('click', (e) => {
    e.preventDefault();
    if ((taskName.value.trim()).length) {
      const { id: curentId } = state.lists.find((item) => item.active === true);
      const newTask = { value: `${taskName.value}`, listId: `${curentId}` };
      state.tasks.push(newTask);
      taskName.value = '';
      render(state);
    }
  });
};

// END

// учитель

// @ts-check
/* eslint-disable no-param-reassign */

import uniqueId from 'lodash/uniqueId.js';

// BEGIN
const renderTasks = (state, elements) => {
  elements.tasksContainer.innerHTML = '';

  const filteredTasks = state.tasks.filter(({ listId }) => listId === state.activeListId);

  if (filteredTasks.length === 0) {
    return;
  }

  const ulForTasks = document.createElement('ul');

  filteredTasks.forEach(({ name }) => {
    const li = document.createElement('li');
    li.textContent = name;
    ulForTasks.append(li);
  });

  elements.tasksContainer.append(ulForTasks);
};

const renderLists = (state, elements) => {
  elements.listsContainer.innerHTML = '';
  const ulForLists = document.createElement('ul');

  state.lists.forEach(({ id, name }) => {
    const li = document.createElement('li');
    let channelNameElement;

    if (id === state.activeListId) {
      channelNameElement = document.createElement('b');
      channelNameElement.textContent = name;
    } else {
      channelNameElement = document.createElement('a');
      channelNameElement.setAttribute('href', `#${name.toLowerCase()}`);
      channelNameElement.textContent = name;
      channelNameElement.addEventListener('click', (e) => {
        e.preventDefault();
        state.activeListId = id;
        renderLists(state, elements);
        renderTasks(state, elements);
      });
    }

    li.append(channelNameElement);
    ulForLists.append(li);
  });

  elements.listsContainer.append(ulForLists);
};

export default () => {
  const defaultChannelId = uniqueId();
  const state = {
    activeListId: defaultChannelId,
    lists: [{ id: defaultChannelId, name: 'General' }],
    tasks: [],
  };

  const elements = {
    listsContainer: document.querySelector('[data-container="lists"]'),
    tasksContainer: document.querySelector('[data-container="tasks"]'),
  };

  const newListForm = document.querySelector('[data-container="new-list-form"]');
  const newTaskForm = document.querySelector('[data-container="new-task-form"]');

  newListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const listName = formData.get('name');
    const exist = state.lists.find(({ name }) => name === listName);
    if (exist) {
      return;
    }
    const list = { id: uniqueId(), name: listName.trim() };
    form.reset();
    form.querySelector('input').focus();
    state.lists.push(list);
    renderLists(state, elements);
  });

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskName = formData.get('name');
    const task = { id: uniqueId(), name: taskName.trim(), listId: state.activeListId };
    form.reset();
    form.querySelector('input').focus();
    state.tasks.push(task);
    renderTasks(state, elements);
  });

  renderLists(state, elements);
  renderTasks(state, elements);
};
// END


// MVC
// on-change
//
// Бутстрап позволяет использовать списки для отображения контента при клике по элементу. В этом задании такие группы списков уже подготовлены, вам предстоит только добавить функционал переключения.
//
//   src/application.js
// Реализуйте логику переключения табов для компонента list-group бутстрапа, используя архитектуру MVC.
//
//   Активный элемент списка получает класс active, а контент, соответствующий ему, получает классы active show
//
// <div class="row">
//   <div class="col-4">
//   <div class="list-group" id="list-tab" role="tablist">
//   <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
// <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
// </div>
// </div>
// <div class="col-8">
//   <div class="tab-content" id="nav-tabContent">
//     <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Home Content</div>
//     <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Profile Content</div>
//   </div>
// </div>
// </div>
// Код должен работать даже в том случае, если на странице есть несколько компонентов list-group.
//
//   Подсказки
// Пример работы: https://getbootstrap.com/docs/5.2/components/list-group/#javascript-behavior

//учитель

// @ts-check

import onChange from 'on-change';

// BEGIN
export default () => {
  // Model
  const state = {
    lists: {},
  };

  // View
  const watchedState = onChange(state, (path, current, previous) => {
    const currentTab = document.querySelector(`#${current}`);
    const currentPanel = document.querySelector(`[aria-labelledby="${current}"]`);
    const previousTab = document.querySelector(`#${previous}`);
    const previousPanel = document.querySelector(`[aria-labelledby="${previous}"]`);

    currentTab.classList.add('active');
    currentPanel.classList.add('active', 'show');
    previousTab.classList.remove('active');
    previousPanel.classList.remove('active', 'show');
  });

  const lists = document.querySelectorAll('[role="tablist"]');

  // Controller
  lists.forEach((list) => {
    const listId = list.id;
    const activeTab = list.querySelector('[role="tab"].active');

    state.lists[listId] = {
      tabId: activeTab.id,
    };

    list.addEventListener('click', (e) => {
      e.preventDefault();
      watchedState.lists[listId].tabId = e.target.id;
    });
  });
};
// END

// состояние форм

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

// мое
// @ts-check
/* eslint-disable no-param-reassign, no-console  */

import keyBy from 'lodash/keyBy.js';
// import has from 'lodash/has.js';
import isEmpty from 'lodash/isEmpty.js';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';

// urls нельзя хардкодить: https://ru.hexlet.io/blog/posts/izbavlyaytes-ot-strok
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

// Этот объект можно использовать для того, чтобы обрабатывать ошибки сети.
// Это необязательное задание, но крайне рекомендуем попрактиковаться.
const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

// Используйте эту функцию для выполнения валидации
// Выведите в консоль её результат, чтобы увидеть, как получить сообщения об ошибках
const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, 'path');
  }
};
// BEGIN (write your solution here)
const renderErrors = (fields, errors, fieldsUi) => {
  Object.entries(fields).forEach(([name, element]) => {
    const error = errors[name];
    if (element.nextElementSibling) {
      element.nextElementSibling.remove();
    }
    element.classList.remove('is-invalid');
    if (error && fieldsUi.toched[name]) {
      element.classList.add('is-invalid');
      const feedback = document.createElement('div');
      feedback.classList.add('invalid-feedback');
      [feedback.textContent] = error.errors;
      element.after(feedback);
    }
  });
};

const renderForm = (state, elements) => {
  if (state.process === 'ready') {
    elements.container.textContent = 'User Created!';
  }
};

export default () => {
  const state = {
    form: {
      process: 'fill',
      valid: false,
      error: {},
      fields: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      fieldsUi: {
        toched: {
          name: false,
          email: false,
          password: false,
          passwordConfirmation: false,
        },
      },
    },
  };

  const elements = {
    container: document.querySelector('[data-container="sign-up"]'),
    button: document.querySelector('.btn'),
    fields: {
      name: document.querySelector('#sign-up-name'),
      email: document.querySelector('#sign-up-email'),
      password: document.querySelector('#sign-up-password'),
      passwordConfirmation: document.querySelector('#sign-up-password-confirmation'),
    },
  };

  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      case 'form.error': {
        renderErrors(elements.fields, watchedState.form.error, watchedState.form.fieldsUi);
        break;
      }
      case 'form.valid': {
        elements.button.disabled = !value;
        break;
      }
      default:
        break;
    }
  });

  Object.entries(elements.fields).forEach(([name, element]) => {
    element.addEventListener('input', (e) => {
      const { value } = e.target;
      watchedState.form.fields[name] = value;
      watchedState.form.fieldsUi.toched[name] = true;
      const errors = validate(watchedState.form.fields);
      watchedState.form.error = errors;
      watchedState.form.valid = isEmpty(errors);
    });
  });

  elements.button.addEventListener('click', async (e) => {
    e.preventDefault();
    const data = {
      name: watchedState.form.fields.name,
      email: watchedState.form.fields.email,
      password: watchedState.form.fields.password,
    };

    try {
      await axios.post(routes.usersPath(), data);
      watchedState.process = 'ready';
      renderForm(watchedState, elements);
    } catch (err) {
      errorMessages();
    }
  });
};
// END

// учителя

// @ts-check
/* eslint-disable no-param-reassign, no-console  */

import keyBy from 'lodash/keyBy.js';
import has from 'lodash/has.js';
import isEmpty from 'lodash/isEmpty.js';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';

// urls нельзя хардкодить: https://ru.hexlet.io/blog/posts/izbavlyaytes-ot-strok
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

// Этот объект можно использовать для того, чтобы обрабатывать ошибки сети.
// Это необязательное задание, но крайне рекомендуем попрактиковаться.
const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

// Используйте эту функцию для выполнения валидации
// Выведите в консоль её результат, чтобы увидеть, как получить сообщения об ошибках
const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, 'path');
  }
};

// BEGIN
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
      // https://ru.hexlet.io/blog/posts/sovershennyy-kod-defolty-v-svitchah
      throw new Error(`Unknown process state: ${processState}`);
  }
};

const handleProcessError = () => {
  // вывести сообщение о сетевой ошибке
};

const renderError = (fieldElement, error) => {
  // Простой способ: очищать контейнер полностью перерисовывая его
  // Более сложный способ, с оптимизацией: если элемент существует, то заменять контент
  // Если элемент не существует, то создаём новый. Всё это является частью отрисовки
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
    // правильный путь - проверять модель, а не DOM. Модель - единый источник правды.
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
// Представление не меняет модель.
// По сути, в представлении происходит отображение модели на страницу
// Для оптимизации рендер происходит точечно в зависимости от того, какая часть модели изменилась
// Функция возвращает функцию. Подробнее: https://ru.hexlet.io/qna/javascript/questions/chto-oznachaet-funktsiya-vida-const-render-a-b
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
  // Модель ничего не знает о контроллерах и о представлении. В ней не хранятся DOM-элементы.
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
  // Контроллеры меняют модель, тем самым вызывая рендеринг.
  // Контроллеры не должны менять DOM напрямую, минуя представление.
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
      // в реальных приложениях необходимо помнить об обработке ошибок сети
      state.form.processState = 'error';
      state.form.processError = errorMessages.network.error;
      throw err;
    }
  });
};
// END


// Организация текстов интерфейса

// В этом упражнении вам предстоит запрограммировать мультиязычный счётчик нажатий, состоящий из переключателя языка, кнопки с числом кликов и кнопки сброса счётчика. Начальное состояние:
//
//   <div class="btn-group" role="group">
//     <button type="button" class="btn mb-3 btn-primary">English</button>
//     <button type="button" class="btn mb-3 btn-outline-primary">Русский</button>
//   </div>
// <button type="button" class="btn btn-info mb-3 align-self-center">0 clicks</button>
// <button type="button" class="btn btn-warning">Reset</button>
// После двух нажатий по кнопке с классом btn-info и нажатия на кнопку переключения на русский язык:
//
//   <div class="btn-group" role="group">
//     <button type="button" class="btn mb-3 btn-outline-primary">English</button>
//     <button type="button" class="btn mb-3 btn-primary">Русский</button>
//   </div>
// <button type="button" class="btn btn-info mb-3 align-self-center">2 клика</button>
// <button type="button" class="btn btn-warning">Сбросить</button>
// src/application.js
// Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику: работу кнопок счётчика, переключение языка. Тексты должны подставляться через библиотеку i18next.
//
//   src/locales/en.js
// Реализуйте тексты для англоязычной версии приложения.
//
//   src/locales/ru.js
// Реализуйте тексты для русскоязычной версии приложения.
//
//   Подсказки
// Для реализации переводов множественной формы вы можете написать свою функцию для получения нужного ключа по числу или воспользоваться возможностями библиотеки i18next
// Каждый запуск приложения должен создавать свой собственный инстанс i18next.
//   Для изменения языка используется функция changeLanguage


export default {
  translation: {
    // BEGIN (write your solution here)
    languages: {
      en: 'English',
      ru: 'Русский',
    },
    buttons: {
      counter: {
        count_one: '{{count}} клик',
        count_few: '{{count}} клика',
        count_many: '{{count}} кликов',
      },
      reset: 'Сбросить',
    },
    // END
  },

  // @ts-check

  export default {
    translation: {
      // BEGIN (write your solution here)
      languages: {
        en: 'English',
        ru: 'Русский',
      },
      buttons: {
        counter: {
          count_one: '{{count}} click',
          count_other: '{{count}} clicks',
        },
        reset: 'Reset',
      },
      // END
    },
  };

  // @ts-check
  /* eslint no-param-reassign: ["error", { "props": false }] */

  import i18n from 'i18next';
  import onChange from 'on-change';
  import resources from './locales/index.js';

// BEGIN
  const languages = ['en', 'ru'];

  const handleSwitchLanguage = (state) => (evt) => {
    const { lng } = evt.target.dataset;

    state.lng = lng;
  };

  const render = (container, watchedState, i18nInstance) => {
    const lngToggler = document.createElement('div');
    lngToggler.classList.add('btn-group');
    lngToggler.setAttribute('role', 'group');

    languages.forEach((lng) => {
      const btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      const className = watchedState.lng === lng ? 'btn-primary' : 'btn-outline-primary';
      btn.classList.add('btn', 'mb-3', className);
      btn.setAttribute('data-lng', lng);
      btn.textContent = i18nInstance.t(`languages.${lng}`);
      btn.addEventListener('click', handleSwitchLanguage(watchedState));
      lngToggler.appendChild(btn);
    });

    const counter = document.createElement('button');
    counter.setAttribute('type', 'button');
    counter.classList.add('btn', 'btn-info', 'btn-lg', 'mb-3', 'align-self-center');
    counter.textContent = i18nInstance.t('buttons.counter.count', { count: watchedState.clicksCount });
    counter.addEventListener('click', () => {
      watchedState.clicksCount += 1;
    });

    const reset = document.createElement('button');
    reset.setAttribute('type', 'button');
    reset.classList.add('btn', 'btn-warning');
    reset.textContent = i18nInstance.t('buttons.reset');
    reset.addEventListener('click', () => {
      watchedState.clicksCount = 0;
    });

    container.innerHTML = '';
    container.append(lngToggler, counter, reset);
  };

  export default async () => {
    const defaultLanguage = 'en';
    // каждый запуск приложения создаёт свой собственный объект i18n и работает с ним,
    // не меняя глобальный объект.
    const i18nInstance = i18n.createInstance();
    await i18nInstance.init({
      lng: defaultLanguage,
      debug: false,
      resources,
    });

    const state = {
      lng: defaultLanguage,
      clicksCount: 0,
    };

    const container = document.querySelector('.container');

    const watchedState = onChange(state, (path, value) => {
      switch (path) {
        // инициализированный объект i18n прокидывается параметром в рендер, чтобы использовать t.
        case 'lng': i18nInstance.changeLanguage(value).then(() => render(container, watchedState, i18nInstance));
          break;

        case 'clicksCount': render(container, watchedState, i18nInstance);
          break;

        default:
          break;
      }
    });

    render(container, watchedState, i18nInstance);
  };
// END