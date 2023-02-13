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