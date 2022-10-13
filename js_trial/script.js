// Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:
//
//     Если число делится без остатка на 3, то вместо него выводится слово Fizz
// Если число делится без остатка на 5, то вместо него выводится слово Buzz
// Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
// В остальных случаях выводится само число
// Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). Для простоты считаем, что эти параметры являются целыми числами больше нуля. Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
//
//     Вызов функции:
//
//     fizzBuzz(11, 20);

const fizzBuzz = (begin, end) => {
    for (let i = begin; i <= end; i += 1) {
        const hasFizz = i % 3 === 0 ? 'Fizz' : '';
        const hasBuzz = i % 5 === 0 ? 'Buzz' : '';
        console.log(`${hasFizz}${hasBuzz}` || i);
    }
};

// моё
const getFizzBuzz = (begin, end) => {
    for (let i = begin; i <= end; i += 1) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            console.log('Fizz');
            continue;
        }
        if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        }
        console.log(i);
        continue;
    }
};
//фибаначи

const fib = (num) => {
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    let first = 0;
    let second = 1;
    let result = first + second;
    for (let i = 2; i <= num; i += 1) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
};

// разворот строки
// Решение vadim_valygin

// @ts-check
// BEGIN (write your solution here)
const revers = (text) => {
    let result = '';
    const textString = String(text);
    for (let i = 0; i < text.length; i += 1) {
        result = `${text[i]}${result}`;
    }
    return result;
};

export default revers;

// END

// Решение учителя

// @ts-check
// BEGIN
const reverse = (str) => {
    if (str.length === 0) {
        return str;
    }

    return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
};

// Альтернативный вариант с использованием тернарного оператора
// const reverse = (str) => (
//   str.length === 0
//     ? str
//     : `${str.slice(-1)}${reverse(str.slice(0, -1))}`
// );

export default reverse;
// END

// реверс числа
// Решение vadim_valygin

// @ts-check
// BEGIN (write your solution here)
const reversInt = (num) => {
    let result = '';
    const numAbs = String(Math.abs(num));
    for (let i = 0; i < numAbs.length; i += 1) {
        result = `${numAbs[i]}${result}`;
    }
    if (num < 0) {
        result = -result;
    }
    return +result;
};

export default reversInt;
// END

// Решение учителя

// @ts-check
// BEGIN
const reverseInt = (num) => {
    const numAsStr = String(Math.abs(num));
    let reversedStr = '';

    for (let i = numAsStr.length - 1; i >= 0; i -= 1) {
        reversedStr += numAsStr[i];
    }
    const reversedModule = Number(reversedStr);

    return num < 0 ? -reversedModule : reversedModule;
};

export default reverseInt;
// END


// счастливый билет
const isHappyTicket = (num) => {
    let first = 0;
    let second = 0;
    for (let i = 0; i < num.length / 2; i += 1) {
        first += Number(num[i]);
    }
    for (let i = num.length / 2; i < num.length; i += 1) {
        second += Number(num[i]);
    }

    return first === second;
};

export default isHappyTicket;

// учитель
export default (num) => {
    let balance = 0;

    for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
        balance += +num[i] - +num[j];
    }
    return balance === 0;
};

// Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
//
//     Совершенное число — положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

// моё
const isPerfect = (num) => {
    if (num <= 0) {
        return false;
    }
    if (num !== Math.round(num)) {
        return false;
    }
    let summ = 0;
    for (let i = 1; i <= num / 2; i += 1) {
        if (num % i === 0) {
            summ += i;
        }
    }
    return num === summ;
};

// учитель
const isPerfect = (num) => {
    if (num < 6) {
        return false;
    }

    let sum = 0;
    const upperBorder = num / 2;

    for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
        if (num % divisor === 0) {
            sum += divisor;
        }
    }

    return sum === num;
};

//
// Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр каждой буквы на противоположный.
//     моё

 const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
};

export default invertCase;

//
//  учителя

const invertCase = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        const upper = str[i] === str[i].toUpperCase();
        result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
    }

    return result;
};

export default invertCase;


// Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу.
//     Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое, и false, если нет. Количество итераций процесса поиска необходимо ограничить числом 10.
//
// моё

// @ts-check
const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
        const digit = Number(numAsStr[i]);
        sum += digit * digit;
    }

    return sum;
};

// BEGIN (write your solution here)
const isHappyNumber = (num) => {
    let result = num;
    for (let i = 1; i <= 10; i += 1) {
        result = sumOfSquareDigits(result);
        if (result === 1) {
            return true;
        }
    }
    return false;
};

export default isHappyNumber;

// END


// учителя

export default (num) => {
    let number = num;
    for (let i = 0; i < 10; i += 1) {
        number = sumOfSquareDigits(number);
        if (number === 1) {
            return true;
        }
    }
    return false;
};


// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть одного вида. Пустая строка (отсутствие скобок) считается сбалансированной.
//
//     Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:
//
//     Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
//     Скобки должны закрываться в правильном порядке.
// моё

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN (write your solution here)
export default (col) => {
    const stack = [];
    for (const symbol of col) {
        if (openingSymbols.includes(symbol)) {
            stack.push(symbol);
        } else {
            const index = closingSymbols.indexOf(symbol);
            const openedSymbol = index !== -1 ? openingSymbols[index] : false;
            if (!openedSymbol) return false;
            const last = stack[stack.length - 1];
            if (last === openedSymbol) {
                if (!stack.pop()) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

// учителя


const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN
const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

export default (str) => {
    const stack = [];
    for (const symbol of str) {
        if (isOpeningSymbol(symbol)) {
            const closingSymbol = getClosingSymbolFor(symbol);
            stack.push(closingSymbol);
        } else {
            const lastSavedSymbol = stack.pop();
            if (symbol !== lastSavedSymbol) {
                return false;
            }
        }
    }

    return stack.length === 0;
};


// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два отсортированных массива и находит их пересечение. Пересечение двух массивов A и B — это массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей.
//     Алгоритм
// Поиск пересечения двух неотсортированных массивов — операция, в рамках которой выполняется вложенный цикл с полной проверкой каждого элемента первого массива на вхождение во второй.
//
//     Сложность данного алгоритма O(n * m) (произведение n и m), где n и m — размерности массивов. Если массивы отсортированы, то можно реализовать алгоритм, сложность которого уже O(n + m), что значительно лучше.
//
//
//     мое

export default (arr1, arr2) => {
    const stack = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] === arr2[index2]) {
            if (stack[stack.length - 1] !== arr1[index1]) {
                stack.push(arr1[index1]);
            }
            index1 += 1;
            index2 += 1;
        } else if (arr1[index1] > arr2[index2]) {
            index2 += 1;
        } else {
            index1 += 1;
        }
    }
    return stack;
};


// учитель


const getIntersectionOfSortedArrays = (arr1, arr2) => {
    const size1 = arr1.length;
    const size2 = arr2.length;

    let i1 = 0;
    let i2 = 0;
    const result = [];

    while (i1 < size1 && i2 < size2) {
        const lastCommon = result[result.length - 1];
        if (arr1[i1] === arr2[i2] && arr1[i1] !== lastCommon) {
            result.push(arr1[i1]);
            i1 += 1;
            i2 += 1;
        } else if (arr1[i1] > arr2[i2]) {
            i2 += 1;
        } else {
            i1 += 1;
        }
    }

    return result;
};

export default getIntersectionOfSortedArrays;


//
// На многих картах, таких как google maps, реализован поиск мест, находящихся рядом с выбранной точкой, например, с текущим расположением. В этом задании мы реализуем подобную задачу в очень упрощённом варианте.
//
//     location.js
// Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит ближайшее место к указанной точке на карте и возвращает его. Параметры функции:
//
//     locations – список мест на карте (массив). Каждое место – массив из двух элементов:
//     Первый элемент – это название места
// Второй – точка на карте (массив из двух чисел-координат x и y)
// point – текущая точка на карте
// import { getTheNearestLocation } from '../location.js';
//
// const locations = [
//     ['Park', [10, 5]],
//     ['Sea', [1, 3]],
//     ['Museum', [8, 4]],
// ];
//
// const currentPoint = [5, 5];
//
// // Если мест нет, то возвращается null
// getTheNearestLocation([], currentPoint); // null
//
// getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
// Для решения этой задачи деструктуризация не нужна, но мы хотим её потренировать. Поэтому решите эту задачу без обращения к индексам массивов.
//
//     Подсказки
// Расстояние между точками высчитывается с помощью функции getDistance().


// моё

// /* eslint-disable import/prefer-default-export */
// /* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};

// // BEGIN (write your solution here)

export const getTheNearestLocation = (locations, currentPoint) => {
    if (!locations.length) return null;
    let [closeLoc] = locations;
    const [, closePoint] = closeLoc;
    let minDistance = getDistance(currentPoint, closePoint);
    for (const location of locations) {
        const [, point] = location;
        const distance = getDistance(currentPoint, point);
        if (distance < minDistance) {
            minDistance = distance;
            closeLoc = location;
        }
    }
    return closeLoc;
};
// // END

/* eslint-disable import/prefer-default-export */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */


// Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.

    // В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.
// Решение vadim_valygin
/* eslint-disable import/prefer-default-export, default-case, consistent-return */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export const flatten = (arr) => {
    const newArr = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            newArr.push(...item);
        } else {
            newArr.push(item);
        }
    }
    return newArr;
};
// END
// Решение учителя
/* eslint-disable import/prefer-default-export, default-case, consistent-return */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN
export const flatten = (coll) => {
    let result = [];
    for (const item of coll) {
        if (Array.isArray(item)) {
            result = [...result, ...item];
        } else {
            result = [...result, item];
        }
    }

    return result;
};
// END

//
// Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает переданные версии version1 и version2. Если version1 > version2, то функция должна вернуть 1, если version1 < version2, то - -1, если же version1 === version2, то - 0.
//
// Версия - это строка, в которой два числа (мажорная и минорные версии) разделены точкой, например: 12.11. Важно понимать, что версия - это не число с плавающей точкой, а несколько чисел не связанных между собой. Проверка на больше/меньше производится сравнением каждого числа независимо. Поэтому версия 0.12 больше версии 0.2.

// Решение vadim_valygin

// BEGIN (write your solution here)
export default (version1, version2) => {
    const arrVersion1 = version1.trim().split('.');
    const arrVersion2 = version2.trim().split('.');
    if (Number(arrVersion1[0]) > Number(arrVersion2[0])) {
        return 1;
    } else if (Number(arrVersion1[0]) < Number(arrVersion2[0])) {
        return -1;
    } else {
        if (Number(arrVersion1[1]) > Number(arrVersion2[1])) {
            return 1;
        } else if (Number(arrVersion1[1]) < Number(arrVersion2[1])) {
            return -1;
        } else {
            return 0;
        }
    }
};
// END
// Решение учителя
// BEGIN

const compareVersion = (first, second) => {
    const [a1, b1] = first.split('.');
    const [a2, b2] = second.split('.');

    const major = Math.sign(a1 - a2);
    const minor = Math.sign(b1 - b2);

    return major === 0 ? minor : major;
};

export default compareVersion;
// END
//
// Вес Хэмминга — это количество единиц в двоичном представлении числа.
//
//     solution.js
// Реализуйте и экспортируйте по умолчанию функцию, которая считает вес Хэмминга.

// Решение vadim_valygin


// BEGIN (write your solution here)
export default (num) => {
    let hamming = 0;
    const binar = num.toString(2).split('');
    for (const i of binar) {
        if (i === '1') {
            hamming += 1;
        }
    }
    return hamming;
};
// END



// Решение учителя


// BEGIN
const hammingWeight = (num) => {
    let weight = 0;
    const digits = num.toString(2);

    for (let i = 0; i < digits.length; i += 1) {
        if (digits[i] === '1') {
            weight += 1;
        }
    }

    return weight;
};

export default hammingWeight;
// END


// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, которое задает размер чанка (куска). Функция должна вернуть массив, состоящий из чанков указанной размерности.

// моё решение

export default (arr, num) => {
    const resultArr = [];
    let interArr = [];
    let i;
    for (i = 0; i < arr.length; i += 1) {
        const el = arr[i];
        if (interArr.length < num) {
            interArr.push(el);
        } else {
            resultArr.push(interArr);
            interArr = [el];
        }
    }
    if (interArr.length) {
        resultArr.push(interArr);
    }
    return resultArr;
};
// END
// Решение учителя
// @ts-check

// BEGIN
export default (arr, size) => {
    const nArr = [];
    for (let i = 0; i < arr.length; i += size) {
        nArr.push(arr.slice(i, i + size));
    }
    return nArr;
};
// END

// Треугольник Паскаля — бесконечная таблица биномиальных коэффициентов, имеющая треугольную форму. В этом треугольнике на вершине и по бокам стоят единицы. Каждое число равно сумме двух расположенных над ним чисел. Строки треугольника симметричны относительно вертикальной оси.
//
// 0:      1
// 1:     1 1
// 2:    1 2 1
// 3:   1 3 3 1
// 4:  1 4 6 4 1
// solution.js
// Напишите функцию generate, которая возвращает указанную строку треугольника паскаля в виде массива. Экспортируйте функцию по умолчанию.
//
//     Пример:
//
// generate(1); // [1, 1]
// generate(4); // [1, 4, 6, 4, 1]

// Решение vadim_valygin

// BEGIN (write your solution here)
const result = (arr) => {
    const arrA = [1];
    for (let i = 0; i < arr.length; i += 1) {
        arrA.push(arr[i] + (arr[i + 1] || 0));
    }
    return arrA;
};
export default (line) => {
    let arr = [1];
    for (let j = 0; j < line; j += 1) {
        arr = result(arr);
    }
    return arr;
};
// END

// Решение учителя

// BEGIN

// Определяем функцию для вычисления факториала
const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};

const generate = (n) => {
    const numbersCount = n + 1;
    const line = [];
    for (let i = 0; i < numbersCount; i += 1) {
        // Для вычисления числа заданной строки используем формулу
        // расчёта биноминальных коэффициентов  С(n, k) = n! / (k! * (n - k)!)
        line[i] = factorial(n) / (factorial(i) * factorial(n - i));
    }
    return line;
};

/* Alternative solutions

export default (row) => {
  const line = [1];

  for (let i = 0; i < row; i += 1) {
    const element = Math.round(line[i] * ((row - i) / (i + 1)));
    line.push(element);
  }

  return line;
};

----

const generateNextRow = (previousRow) => {

  В nextRow будем добавлять числа очередной строки
  const nextRow = [];
  Вычисляем все числа строки
  for (let i = 0; i <= previousRow.length; i += 1) {
    Вычисляем каждое число как сумму двух расположенных над ним чисел из предыдущей строки
    const first = previousRow[i - 1] || 0;
    const second = previousRow[i] || 0;
    Добавляем число в строку
    nextRow[i] = first + second;
  }

  return nextRow;
};

const generate = (rowNumber) => {
  currentRow содержит текущую строку.
  Начальное значение — вершина треугольника.

  let currentRow = [1];

  Последовательно формируем строку за строкой.
  Обработку начинаем со второй строки (счётчик начинается с единицы),
  так как начальная строка нам уже известна.
  Цикл закончит работу, когда дойдёт до нужной строки.

  for (let row = 1; row <= rowNumber; row += 1) {
    Формирование следующей строки вынесем в отдельную функцию.
    Обновляем текущую строку.
    Теперь текущей становится только, что вычисленная строка.

    currentRow = generateNextRow(currentRow);
  }
  После окончания работы цикла в currentRow окажется искомая строка.

  return currentRow;
};

*/

export default generate;

// Реализуйте и экспортируйте по умолчанию функцию, которая находит в массиве непрерывные возрастающие последовательности чисел и возвращает массив с их перечислением.
//
//     Примеры
// summaryRanges([]);
// // []
//
// summaryRanges([1]);
// // []
//
// summaryRanges([1, 2, 3]);
// // ['1->3']
//
// summaryRanges([0, 1, 2, 4, 5, 7]);
// // ['0->2', '4->5']
//
// summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]);
// // ['110->112', '-5->-4']

// Решение vadim_valygin

// @ts-check

// BEGIN (write your solution here)
export default (arr) => {
    const resultArr = [];
    let orderArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if ((arr[i + 1] - arr[i]) === 1) {
            orderArr.pop();
            orderArr.push(arr[i], arr[i + 1]);
        } else if (orderArr.length >= 2) {
            resultArr.push(`${orderArr[0]}->${orderArr[orderArr.length - 1]}`);
            orderArr = [];
        } else {
            orderArr = [];
        }
    }
    return resultArr;
};
// END
// Решение учителя


// @ts-check


// BEGIN
const getRangeOfSequence = (sequence) => {
    const first = sequence[0];
    const last = sequence[sequence.length - 1];
    return `${first}->${last}`;
};

const summaryRanges = (numbers) => {
    const ranges = [];
    let sequence = [];

    for (let index = 0; index < numbers.length; index += 1) {
        const current = numbers[index];
        const next = numbers[index + 1];
        sequence.push(current);
        if (current + 1 !== next) {
            if (sequence.length > 1) {
                const range = getRangeOfSequence(sequence);
                ranges.push(range);
            }
            sequence = [];
        }
    }

    return ranges;
};

export default summaryRanges;
// END

// В данном упражнении необходимо реализовать стековую машину, то есть алгоритм, проводящий вычисления по обратной польской записи.
//
//     Обратная польская нотация или постфиксная нотация — форма записи математических и логических выражений, в которой операнды расположены перед знаками операций. Выражение читается слева направо. Когда в выражении встречается знак операции, выполняется соответствующая операция над двумя ближайшими операндами, находящимися слева от знака операции. Результат операции заменяет в выражении последовательность её операндов и знак, после чего выражение вычисляется дальше по тому же правилу. Таким образом, результатом вычисления всего выражения становится результат последней вычисленной операции.
//
//     Например, выражение (1 + 2) * 4 + 3 в постфиксной нотации будет выглядеть так: 1 2 + 4 * 3 +, а результат вычисления: 15. Другой пример - выражение: 7 - 2 * 3, в постфиксной нотации: 7 2 3 * -, результат: 1.
//
// solution.js
// Экспортируйте по умолчанию функцию, которая принимает массив, каждый элемент которого содержит число или знак операции (+, -, *, /). Функция должна вернуть результат вычисления по обратной польской записи. Если в какой-то момент происходит деление на ноль, функция должна вернуть значение null.
//
// calcInPolishNotation([1, 2, '+', 4, '*', 3, '+']); // 15
// calcInPolishNotation([7, 2, 3, '*', '-']); // 1

// Решение vadim_valygin

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */
// BEGIN (write your solution here)
export default (arr) => {
    const newArr = [];
    let resultArr = 0;
    for (let i = 0; i <= arr.length; i += 1) {
        if (arr[i] === Number(arr[i])) {
            newArr.push(arr[i]);
        } else if (arr[i] === '/') {
            if (newArr[newArr.length - 1] === 0) {
                return null;
            } else {
                resultArr = newArr[newArr.length - 2] / newArr[newArr.length - 1];
                newArr.splice(-2, 2, resultArr);
            }
        } else if (arr[i] === '+') {
            resultArr = newArr[newArr.length - 2] + newArr[newArr.length - 1];
            newArr.splice(-2, 2, resultArr);
        } else if (arr[i] === '-') {
            resultArr = newArr[newArr.length - 2] - newArr[newArr.length - 1];
            newArr.splice(-2, 2, resultArr);
        } else if (arr[i] === '*') {
            resultArr = newArr[newArr.length - 2] * newArr[newArr.length - 1];
            newArr.splice(-2, 2, resultArr);
        }
    }
    return Number(newArr.join());
};

// END
// Решение учителя

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */

// BEGIN
const calcInPolishNotation = (array) => {
    const stack = [];
    const operators = ['*', '/', '+', '-'];

    for (const value of array) {
        if (!operators.includes(value)) {
            stack.push(value);
            continue;
        }

        const b = stack.pop();
        const a = stack.pop();
        let result;

        switch (value) {
            case '*':
                result = a * b;
                break;
            case '/':
                result = b === 0 ? null : a / b;
                break;
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            default:
                break;
        }

        if (result === null) {
            return result;
        }

        stack.push(result);
    }

    return stack.pop();
};

export default calcInPolishNotation;
// END

// Реализуйте функцию getLongestLength(), принимающую на вход строку и возвращающую длину максимальной последовательности из неповторяющихся символов. Подстрока может состоять из одного символа. Например в строке qweqrty, можно выделить следующие подстроки: qwe, weqrty. Самой длинной будет weqrty.
//
//     Экспортируйте функцию по умолчанию.
//
//     Пример
// getLongestLength('abcdeef'); // 5
// getLongestLength('jabjcdel'); // 7
// getLongestLength(''); // 0
// Подсказки
// чтобы получить индекс элемента в массиве, используйте метод .indexOf()


// Решение vadim_valygin

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)

const getLongestLength = (string) => {
    let max = 0;
    let currentString = '';
    let char;
    let pos;
    for (let i = 0; i < string.length; i += 1) {
        char = string[i];
        pos = currentString.indexOf(char);
        if (pos !== -1) {
            currentString = currentString.slice(pos + 1);
        }
        currentString += char;
        max = Math.max(max, currentString.length);
    }
    return max;
};
export default getLongestLength;
// END
//
// Решение учителя


// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN
const getLongestLength = (str) => {
    let sequence = [];
    let maxLength = 0;

    // Проходимся по всем символам переданной строки.
    for (const char of str) {
        // Ищем в сформированной последовательности
        // позицию первого вхождения текущего символа.
        const index = sequence.indexOf(char);
        // Добавляем в последовательность текущий символ.
        sequence.push(char);
        if (index !== -1) {
            // Если символ в последовательности был найден,
            // значит в неё был добавлен повторяющийся символ.
            // Отсекаем все символы включая найденный.
            sequence = sequence.slice(index + 1);
        }
        // Получаем длину последовательности.
        const sequenceLength = sequence.length;
        if (sequenceLength > maxLength) {
            // Если длина последовательности больше чем максимальная,
            // устанавливаем новую максимальную длину.
            maxLength = sequenceLength;
        }
    }

    return maxLength;
};

export default getLongestLength;
// END

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей, извлекает их имена, сортирует в алфавитном порядке и возвращает отсортированный список имен.
//
//     const users = [
//     { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
//     { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
//     { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
//     { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
// ];
//
// getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
// Попробуйте использовать деструктуризацию для извлечения имени прямо в цикле.

// моё

export default (data) => {
    const result = [];
    for (const { name } of data) {
        result.push(name);
    }
    return result.sort();
};

// ДНК и РНК это последовательности нуклеотидов.
//
//     Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
//
//     Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
//
//     Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
//
//     G -> C
// C -> G
// T -> A
// A -> U
// dnaToRna.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).
//
// Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.
//
// dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
// dnaToRna('CCGTA'); // 'GGCAU'
// dnaToRna(''); // ''
// dnaToRna('ACNTG'); // null


// моё

export default (string) => {
    let resultString = '';
    const objectKeys = {
        g: 'C',
        c: 'G',
        t: 'A',
        a: 'U',
    };
    if (string.length < 1) {
        return '';
    }
    for (const key of string) {
        if (objectKeys[key.toLowerCase()]) {
            resultString += objectKeys[key.toLowerCase()];
        } else {
            return null;
        }
    }
    return resultString;
};

// учителя

const map = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
};

export default (dna) => {
    const rna = [];

    for (const nucleotide of dna) {
        if (!Object.hasOwn(map, nucleotide)) {
            return null;
        }

        rna.push(map[nucleotide]);
    }

    return rna.join('');
};

//
// Query String (строка запроса) - часть адреса страницы в интернете, содержащая константы и их значения. Она начинается после вопросительного знака и идет до конца адреса. Пример:
//
// # query string: page=5
// https://ru.hexlet.io/blog?page=5
//     Если параметров несколько, то они отделяются амперсандом &:
//
// # query string: page=5&per=10
// https://ru.hexlet.io/blog?per=10&page=5
//     buildQueryString.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный query string из этих параметров:
//
//     import bqs from '../buildQueryString.js';
//
// bqs({ per: 10, page: 1 });
// // page=1&per=10
// bqs({ param: 'all', param1: true });
// // param=all&param1=true
// Имена параметров в выходной строке должны располагаться в алфавитном порядке (то есть их нужно отсортировать).

// мое

export default (data) => Object.keys(data).sort().map((key) => `${key}=${data[key]}`).join('&');
// END

// учителя

export default (params) => {
    const keys = Object.keys(params).sort();
    const result = [];

    for (const key of keys) {
        result.push(`${key}=${params[key]}`);
    }

    return result.join('&');
};
//
// scrabble.js
// Реализуйте и экспортируйте по умолчанию функцию-предикат, которая принимает на вход два параметра: набор символов в нижнем регистре (строку) и слово, и проверяет, можно ли из переданного набора составить это слово. В результате вызова функция возвращает true или false.
//
//     При проверке учитывается количество символов, нужных для составления слова, и не учитывается их регистр.
//
//     Примеры
// scrabble('rkqodlw', 'world'); // true
// scrabble('avj', 'java'); // false
// scrabble('avjafff', 'java'); // true
// scrabble('', 'hexlet'); // false
// scrabble('scriptingjava', 'JavaScript'); // true


// мое
// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
export default (string, word) => {
    const normalizeWord = word.toLowerCase();
    const stringArray = [];
    for (const j of string) {
        stringArray.push(j);
    }
    if (word.length > string.length) {
        return false;
    }
    for (const i of normalizeWord) {
        const x = _.indexOf(stringArray, i);
        if (x === -1) {
            return false;
        }
        stringArray[x] = '';
    }
    return true;
};
// END



// учителя

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN
// Эту функцию можно заменить функцией countBy
// из библиотеки lodash https://lodash.com/docs/#countBy
const countByChars = (str) => {
    const chars = {};

    for (const char of str) {
        const count = _.get(chars, char, 0);
        chars[char] = count + 1;
    }

    return chars;
};

export default (str, word) => {
    const countsChars = countByChars(str);

    for (const char of word.toLowerCase()) {
        const count = _.get(countsChars, char, 0);
        if (count === 0) {
            return false;
        }
        countsChars[char] -= 1;
    }

    return true;
};
// END


//
// prime.js
// Реализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное число на простоту и печатает на экран yes или no.
//
//   Примеры
// sayPrimeOrNot(5); // 'yes'
// sayPrimeOrNot(4); // 'no'
// Подсказки
// Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.
//
//   Для этого выделите процесс определения того, является ли число простым, в отдельную функцию, возвращающую логическое значение. Это функция, с помощью которой мы отделяем чистый код от кода, интерпретирующего логическое значение (как 'yes' или 'no') и делающего побочный эффект (печать на экран).
//
// Пример такого разделения и хороших абстракций — в решении учителя.


// мое
// @ts-check
/* eslint-disable no-console */

// BEGIN (write your solution here)
const isPrimeNum = (num) => {
    if (num === 0 || num === 1 || num !== Math.abs(num)) {
        return false;
    }
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

export default (number) => console.log(isPrimeNum(number) ? 'yes' : 'no');
// END


// учителя

// @ts-check
/* eslint-disable no-console */

// BEGIN
const isPrime = (num) => {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const sayPrimeOrNot = (num) => {
    const text = isPrime(num) ? 'yes' : 'no';
    console.log(text);
};

export default sayPrimeOrNot;
// END

//
// Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и возвращает самых взрослых. Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице. Экспортируйте данную функцию по умолчанию.
//
//     Пример использования
// const users = [
//     { name: 'Tirion', birthday: 'Nov 19, 1988' },
//     { name: 'Sam', birthday: 'Nov 22, 1999' },
//     { name: 'Rob', birthday: 'Jan 11, 1975' },
//     { name: 'Sansa', birthday: 'Mar 20, 2001' },
//     { name: 'Tisha', birthday: 'Feb 27, 1992' },
//     { name: 'Chris', birthday: 'Dec 25, 1995' },
// ];
//
// takeOldest(users);
// // [
// //   { name: 'Rob', birthday: 'Jan 11, 1975' },
// // ];
// Другие примеры смотрите в модуле с тестами.
//
//     Подсказки
// Для преобразования дат в единое представление — unixtimestamp — используйте метод Date.parse()
// В рамках данного упражнения, для записи дат используется только формат RFC2822.
//     sortBy
// Подумайте, что из себя представляет данная функция: команду или запрос?


// мое
// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
export default (list, num = 1) => {
    const normalizedList = _.sortBy(list, (user) => Date.parse(user.birthday));
    return normalizedList.slice(0, num);
};
// END


// учителя

// @ts-check

import _ from 'lodash';

// BEGIN
const takeOldest = (users, count = 1) => {
    const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
    return sorted.slice(0, count);
};

export default takeOldest;
// END

//
// Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству. Функция принимает аргументами массив объектов и название свойства для группировки. Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - массив с данными, подходящими для группы.
//
//     import groupBy from './groupBy.js';
//
// const students = [
//     { name: 'Tirion', class: 'B', mark: 3 },
//     { name: 'Keit', class: 'A', mark: 3 },
//     { name: 'Ramsey', class: 'A', mark: 4 },
// ];
//
// groupBy([], ''); // {}
// groupBy(students, 'mark');
// // {
// //   3: [
// //     { name: "Tirion", class: "B", mark: 3 },
// //     { name: "Keit", class: "A", mark: 3 },
// //   ],
// //   4: [
// //     { name: "Ramsey", class: "A", mark: 4 },
// //   ],
// // }
// Подсказки
// Аналогичная функция есть в lodash, но вам её нужно создать самостоятельно
// Алгоритм решения задачи с помощью цикла и редьюса одинаковый. Если вам так проще, сделайте сначала через цикл, затем перепишите через reduce
// Решение этой задачи аналогично решению задачи usersByAge из теории


// мое
// @ts-check

// BEGIN (write your solution here)
export default (students, key) => students.reduce((acc, student) => {
    const studentKey = student[key];
    if (!Array.isArray(acc[studentKey])) {
        acc[studentKey] = [];
    }
    acc[studentKey].push(student);
    return acc;
}, {});
// END

// учителя

// @ts-check

// BEGIN
const groupBy = (objects, key) => objects.reduce((acc, object) => {
    // из каждого объекта берётся значение по ключу
    const groupName = object[key];
    // контейнером группы выступает массив
    // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
    const group = acc[groupName] ?? [];
    // возвращается новый объект аккумулятора
    // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
    // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
    return { ...acc, [groupName]: group.concat(object) };
}, {});

export default groupBy;
// END
