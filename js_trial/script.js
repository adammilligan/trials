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
// набор наших скобок 

export default (col) => {
    const stack = [];
    // создали результрующий массив
    for (const symbol of col) {
        //проходим по коллекции
        if (openingSymbols.includes(symbol)) {
            // если символ является открывающей скобкой - добавляем в резуьтат
            stack.push(symbol);
        } else {
            // если скобки нет в коллекции открывающихся, то мы ищем ее индекс в коллекции закрывающих скобок
            const index = closingSymbols.indexOf(symbol);
            // если индекс внутри коллекции - возвращаем соответствующую этому индексу открывающую скобку, иначе false 
            const openedSymbol = index !== -1 ? openingSymbols[index] : false;
            // если false, то прерываем и возвращаем false 
            if (!openedSymbol) return false;
            // сравниваем эту скобку с последней, которая лежит в нашей коллекции
            const last = stack[stack.length - 1];
            if (last === openedSymbol) {
                // если они одинаковые, то мы удаляем это последнее значение из массива .pop()
                if (!stack.pop()) {
                    // если удалять нечего, то возвращаем false
                    return false;
                }
            } else {
                // если скобки не одинаковые, то тоже возвращаем false
                return false;
            }
        }
    }
    // если у нас массив остался пустым, значит все скобки открылись и все закрылись, если не пустой, значит пар не зватило
    // сравниваем длинну массива с нулем, вернется либо true либо false
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

// emails.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список емейлов, а возвращает количество емейлов, расположенных на каждом бесплатном домене. Список бесплатных доменов хранится в константе freeEmailDomains.
//
//     Примеры
// const emails = [
//     'info@gmail.com',
//     'info@yandex.ru',
//     'info@hotmail.com',
//     'mk@host.com',
//     'support@hexlet.io',
//     'key@yandex.ru',
//     'sergey@gmail.com',
//     'vovan@gmail.com',
//     'vovan@hotmail.com',
// ];
//
// getFreeDomainsCount(emails);
// // {
// //   'gmail.com': 3,
// //   'yandex.ru': 2,
// //   'hotmail.com': 2,
// // };
// Другие примеры смотрите в модуле с тестами.
//
//     Подсказки
// При решении вам может понадобится функция get() из библиотеки lodash.
//
//  моё
// @ts-check

import get from 'lodash/get.js';

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];

// BEGIN (write your solution here)
export default (list) => {
    const domainsObject = {};
    for (let listItem = 0; listItem < list.length; listItem += 1) {
        const key = list[listItem].split('@')[1];
        if (freeEmailDomains.includes(key)) {
            if (get(domainsObject, key)) {
                domainsObject[key] += 1;
            } else {
                domainsObject[key] = 1;
            }
        }
    }
    return domainsObject;
};


// учителя


// @ts-check

import get from 'lodash/get.js';

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => emails
    .map((email) => {
        const [, domain] = email.split('@');
        return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
        const count = get(acc, domain, 0) + 1;
        return { ...acc, [domain]: count };
    }, {});

export default getFreeDomainsCount;
// END

// users.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает список пользователей и возвращает объект, где ключ - это год рождения, а значение - это количество мужчин, родившихся в этот год.
//
//     Примеры
// const users = [
//     { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
//     { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
//     { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
//     { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
//     { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
//     { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
//     { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
//     { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
//     { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
//     { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
// ];
//
// getMenCountByYear(users);
// // {
// //   1973: 3,
// //   1963: 1,
// //   1980: 2,
// //   2012: 1,
// //   1999: 1,
// // };
// Подсказки
// Для извлечения года из даты используйте метод slice

// Решение vadim_valygin

import _ from 'lodash';

// BEGIN (write your solution here)
export default (users) => users
    .filter(({ gender }) => gender === 'male')
    .map(({ birthday }) => birthday.split('-')[0])
    .reduce((acc, birthday) => {
        const count = _.get(acc, birthday, 0) + 1;
        return { ...acc, [birthday]: count };
    }, {});
// END

// Решение учителя

// @ts-check

import _ from 'lodash';

// BEGIN
const getMenCountByYear = (users) => {
    const men = users.filter(({ gender }) => gender === 'male');

    const years = men.map(({ birthday }) => birthday.slice(0, 4));

    return years.reduce((acc, year) => {
        const count = _.get(acc, year, 0) + 1;
        return { ...acc, [year]: count };
    }, {});
};

// findIndexOfNearest.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число. Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.
//
//     Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу, то возвращается наименьший из индексов ближайших чисел.
//
//     Примеры
// findIndexOfNearest([], 2);              // null
// findIndexOfNearest([15, 10, 3, 4], 0);  // 2
// findIndexOfNearest([7, 5, 3, 2], 4);    // 1
// findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2

// Решение vadim_valygin


// @ts-check

// BEGIN (write your solution here)
export default (numbers, number) => {
    if (!numbers.length) {
        return null;
    }
    const diff = numbers.map((index) => Math.abs(index - number));
    const min = Math.min(...diff);
    return diff.indexOf(min);
};
// END


// Решение учителя
/
export default (numbers, num) => {
    if (numbers.length === 0) {
        return null;
    }

    const diffs = numbers.map((element) => Math.abs(num - element));

    return diffs.reduce((index, diff, currentIndex) => (
        diff < diffs[index] ? currentIndex : index
    ), 0);
};

// NRZI код (Non Return to Zero Invertive) — один из способов линейного кодирования. Обладает двумя уровнями сигнала и используется для передачи битовых последовательностей, содержащих только 0 и 1. NRZI применяется, например, в оптических кабелях, где устойчиво распознаются только два состояния сигнала — свет и темнота.
//
//     Принцип кодирования
// При передаче логического нуля на вход кодирующего устройства передается потенциал, установленный на предыдущем такте (то есть состояние потенциала не меняется), а при передаче логической единицы потенциал инвертируется на противоположный.
//
//     nrzi
//
// solution.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает строку в виде графического представления линейного сигнала и возвращает строку с бинарным кодом. Внимательно изучите примеры.
//
//     Примеры:
// const signal1 = '_|¯|____|¯|__|¯¯¯';
// nrzi(signal1); // '011000110100'
//
// const signal2 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';
// nrzi(signal2); // '110010000100111'
//
// const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';
// nrzi(signal3); // '010010000100111'
//
// const signal4 = '';
// nrzi(signal4); // ''
//
// const signal5 = '|';
// nrzi(signal5); // ''
// Подсказки
// Символ | в строке указывает на переключение сигнала и означает, что уровень сигнала в следующем такте будет изменён на противоположный по сравнению с предыдущим.


// @ts-check


// Мое


// BEGIN (write your solution here)
export default (signalString) => {
    if (signalString.length <= 1) {
        return '';
    }
    const resultSignalString = [];
    if (signalString[0] === '|') {
        resultSignalString.push('1');
    } else {
        resultSignalString.push('0');
    }
    const sortSignalString = signalString.split('').filter((element) => element !== '|');
    const binaryString = sortSignalString.map((el, index) => {
        if (sortSignalString[index + 1]) {
            return el === sortSignalString[index + 1] ? '0' : '1';
        }
        return '';
    });
    resultSignalString.push(binaryString.join(''));
    return resultSignalString.join('');
};
// END

// учителя

// @ts-check

// BEGIN
export default (str) => str
    .split('')
    .map((e, i, arr) => {
        if (e === '|') return '';
        return arr[i - 1] === '|' ? 1 : 0;
    })
    .join('');
// END

// Для задания цветов в HTML и CSS используются числа в шестнадцатеричной системе счисления. Чтобы не возникало путаницы в определении системы счисления, перед шестнадцатеричным числом ставят символ решетки #, например, #135278. Обозначение цвета (rrggbb) разбивается на три составляющие, где первые два символа обозначают красную компоненту цвета, два средних — зеленую, а два последних — синюю. Таким образом каждый из трех цветов — красный, зеленый и синий — может принимать значения от 00 до FF в шестнадцатеричной системе исчисления.
//
//     solution.js
// При работе с цветами часто нужно получить отдельные значения красного, зеленого и синего (RGB) компонентов цвета в десятичной системе исчисления и наоборот. Реализуйте и экспортируйте функции rgbToHex() и hexToRgb(), которые возвращают соответствующие представление цвета.
//
//     Примеры
// hexToRgb('#24ab00'); // { r: 36, g: 171, b: 0 }
//
// rgbToHex(36, 171, 0); // '#24ab00'
// Подсказки
// Вам может понадобится функция chunk из библиотеки lodash.
//     Используйте функцию parseInt() для перевода строки в необходимую систему счисления
// Изучите возможности метода toString() для числа, рассмотрите примеры
// Дополнительно можно использовать метод padStart()

// мое

// @ts-check

import chunk from 'lodash/chunk.js';

// BEGIN (write your solution here)
const rgbToHex = (r, g, b) => `#${[r, g, b].map((el) => (el.toString(16)).padStart(2, '0')).join('')}`;

const hexToRgb = (color) => {
    const [r, g, b] = chunk(color.slice(1), 2)
        .map((el) => el.join(''))
        .map((el) => parseInt(el, 16));
    return { r, g, b };
};

export { rgbToHex, hexToRgb };
// END


// учителя

// @ts-check

// import chunk from 'lodash/chunk.js';
//
// // BEGIN
// export const rgbToHex = (r, g, b) => {
//     const hex = [r, g, b]
//         .map((channel) => channel.toString(16).padStart(2, '0'))
//         .join('');
//     return `#${hex}`;
// };
//
// export const hexToRgb = (hex) => {
//     const [r, g, b] = chunk(hex.slice(1), 2)
//         .map((channel) => channel.join(''))
//         .map((channel) => parseInt(channel, 16));
//     return { r, g, b };
// };
// // END
//
// Игральная кость - шестигранный кубик, который бросается несколько раз. Гистограмма - это графическое представление данных в виде столбцов или колонок.
//
//     histogram.js
// Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран горизонтальную гистограмму. Функция принимает на вход количество бросков кубика и функцию, которая имитирует бросок игральной кости (её реализовывать не нужно). Вызов этой функции генерирует значение от 1 до 6, что соответствует одной из граней игральной кости.
//
//     Гистограмма содержит строки, каждой из которых соответствует грань игральной кости и количество выпадений этой грани. Результаты отображаются графически (с помощью символов #) и в виде числового значения, за исключением случаев, когда количество равно 0 (нулю).
//
//     Примеры
// import play from '../histogram.js';
//
// play(100, rollDie);
// // => 1|####################### 23
// //    2|################## 18
// //    3|############# 13
// //    4|#################### 20
// //    5|############ 12
// //    6|############## 14
//
// play(13, rollDie);
// // => 1|
// //    2|## 2
// //    3|# 1
// //    4|## 2
// //    5|#### 4
// //    6|#### 4


// @ts-check
/* eslint-disable no-console */

import _ from 'lodash';

// BEGIN
export default (roundsCount, rollDie) => {
    const bar = '#';
    const numbers = _.times(roundsCount, rollDie);
    const sides = _.range(1, 7);

    const lines = sides.map((side) => {
        const count = numbers.filter((number) => number === side).length;
        const displayCount = count !== 0 ? ` ${count}` : '';
        return `${side}|${bar.repeat(count)}${displayCount}`;
    });
    const str = lines.join('\n');

    console.log(str);
};
// END



const createCountdown = (num) => {
    let result = num;

    const countdownFrom = () => {
        if(result === 0) {
            return 0;
        };

        let temp = result
        result -= 1;

        return temp;
    }

    return countdownFrom;
};

const sumExcept = (arr, start, dif) => {
    let index;
    let step;
    const round = (number) => Math.round(number);
    const abs = (number) => Math.abs(number);
    let result = 0;
    if (start >= arr.length) {
        for (const el of arr) {
            result += el;
        }
    }
    if (start !== round(start) || start !== abs(start) || start === 0) {
        index = 0;
    } else {
        index = start -1;
    }
    if (dif !== round(dif) || dif !== abs(dif) || dif === 0) {
        step = 0;
        return result = arr[index];
    } else {
        step = dif +1;
    }
    for (let i = index; i < arr.length; i += step ) {
        if (arr[i] === abs(arr[i]) && arr[i] === round(arr[i])){
            result += arr[i];
        } else {
            result +=0;
        }
    }
    return result;
};

// tests/set.test.js
// Напишите тесты для функции set(obj, path, value) возвращающей объект, в котором она изменяет (или добавляет) значение по указанному пути. Функция мутирует объект.
//
//     const object = { a: [{ b: { c: 3 } }] };
//
// set(object, 'a[0].b.c', 4);
// console.log(object.a[0].b.c); // => 4
//
// set(object, ['x', '0', 'y', 'z'], 5);
// console.log(object.x[0].y.z); // => 5
// Подсказки
// Переиспользуйте объект данных
// Тесты не должны зависеть друг от друга
// Помните о том, что неверная реализация функции set() может возвращать объект с неправильной структурой
// _.set


// мое
// @ts-check

import _ from 'lodash';
import getFunction from '../functions.js';

const set = getFunction();

// BEGIN (write your solution here)
let object;

beforeEach(() => {
    object = { a: [{ b: { c: 3 } }] };
});

test('first case', () => {
    expect(set(_.cloneDeep(object), 'a[0].b.c', 4)).toStrictEqual(_.set(object, 'a[0].b.c', 4));
});

test('second case', () => {
    expect(set(_.cloneDeep(object), ['x', '0', 'y', 'z'], 5)).toStrictEqual(_.set(_.cloneDeep(object), ['x', '0', 'y', 'z'], 5));
});

test('true case', () => {
    expect(set(object, 'a[0].b.c')).toStrictEqual(_.set(object, 'a[0].b.c'));
});
// END

// учителя

// @ts-check

import _ from 'lodash';

import getFunction from '../functions.js';

const set = getFunction();

// BEGIN
let data;
let dataCopy;

beforeEach(() => {
    data = {
        a: [
            {
                b: {
                    c: 3,
                },
            },
        ],
    };
    dataCopy = _.cloneDeep(data);
});

test('plain set', () => {
    set(data, 'a', 'value');
    dataCopy.a = 'value';
    expect(data).toEqual(dataCopy);
});

test('nested set', () => {
    set(data, 'a[0].b.c', true);
    dataCopy.a[0].b.c = true;
    expect(data).toEqual(dataCopy);
});

test('set new property', () => {
    set(data, 'a[0].b.d', false);
    dataCopy.a[0].b.d = false;
    expect(data).toEqual(dataCopy);
});
// END

//
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив (элементы которого — это объекты) и пары ключ-значение (тоже в виде объекта), а возвращает первый элемент исходного массива, значения которого соответствуют переданным парам (всем переданным). Если совпадений не было, то функция должна вернуть null.
//
//     Примеры
// findWhere(
//     [
//         { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
//         { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
//         { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
//         { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
//         { title: 'Still foooing', author: 'FooBar', year: 3333 },
//         { title: 'Happy Foo', author: 'FooBar', year: 4444 },
//     ],
//     { author: 'Shakespeare', year: 1611 }
// ); // { title: 'Cymbeline', author: 'Shakespeare', year: 1611 }


// моё
// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
export default (list, element) => {
    for (const i of list) {
        if (JSON.stringify({ ...i }) === JSON.stringify({ ...i, ...element })) {
            return i;
        }
    }
    return null;
};

// END

// учителя

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
const findWhere = (data, where) => {
    const entries = Object.entries(where);
    for (const item of data) {
        let find = true;
        for (const [key, value] of entries) {
            if (item[key] !== value) {
                find = false;
            }
        }
        if (find) {
            return item;
        }
    }

    return null;
};

export default findWhere;
// END


// Иногда в программировании возникает задача поиска разницы между двумя наборами данных, такими как объекты. Например, при поиске различий в json файлах. Для этого даже существуют специальные сервисы, например, http://www.jsondiff.com/ (попробуйте нажать на ссылку sample data и затем кнопку Compare).
//
// solution.js
// Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два объекта и возвращает результат сравнения в виде объекта. Ключами результирующего объекта будут все ключи из двух входящих объектов, а значением строка с описанием отличий: added, deleted, changed или unchanged.
//
//     Возможные значения:
//
//     added — ключ отсутствовал в первом объекте, но был добавлен во второй
// deleted — ключ был в первом объекте, но отсутствует во втором
// changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
// unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
// import genDiff from './diffGenerator.js';
//
// genDiff(
//     { one: 'eon', two: 'two', four: true },
//     { two: 'own', zero: 4, four: true },
// );
// // {
// //   one: 'deleted',
// //   two: 'changed',
// //   four: 'unchanged',
// //   zero: 'added',
// // }



// моё

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// import _ from 'lodash';

// BEGIN (write your solution here)
export default (initialObject, resultObject) => {
    const diff = {};
    const initialEntries = Object.entries(initialObject);
    const resultKeys = Object.keys(resultObject);
    for (const [key, value] of initialEntries) {
        if (Object.hasOwn(resultObject, key)) {
            if (resultObject[key] === value) {
                diff[key] = 'unchanged';
            } else {
                diff[key] = 'changed';
            }
        } else {
            diff[key] = 'deleted';
        }
    }
    for (const key of resultKeys) {
        if (!Object.hasOwn(initialObject, key)) {
            diff[key] = 'added';
        }
    }
    return diff;
};

// END


// учителя


// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN

const genDiff = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2); // https://youtu.be/vkUTX1hruF8?t=929

    const result = {};
    for (const key of keys) {
        if (!Object.hasOwn(data1, key)) {
            result[key] = 'added';
        } else if (!Object.hasOwn(data2, key)) {
            result[key] = 'deleted';
        } else if (data1[key] !== data2[key]) {
            result[key] = 'changed';
        } else {
            result[key] = 'unchanged';
        }
    }

    return result;
};

export default genDiff;
// END

// Для записи цифр римляне использовали буквы латинского алфафита: I, V, X, L, C, D, M. Например:
//
// 1 обозначалась с помощью буквы I
// 10 с помощью Х
// 7 с помощью VII
// Число 2020 в римской записи — это MMXX (2000 = MM, 20 = XX).
//
//     solution.js
// Реализуйте и экспортируйте функцию toRoman(), которая переводит арабские числа в римские. Функция принимает на вход целое число в диапазоне от 1 до 3000, а возвращает строку с римским представлением этого числа.
//
//     Реализуйте и экспортируйте функцию toArabic(), которая переводит число в римской записи в число, записанное арабскими цифрами. Если переданное римское число не корректно, то функция должна вернуть значение false.
//
//     Примеры
// toRoman(1);
// // 'I'
// toRoman(59);
// // 'LIX'
// toRoman(3000);
// // 'MMM'
//
// toArabic('I');
// // 1
// toArabic('LIX');
// // 59
// toArabic('MMM');
// // 3000
//
// toArabic('IIII');
// // false
// toArabic('VX');
// // false


// мое

// @ts-check
/* eslint no-restricted-syntax: [off, ForOfStatement] */

// BEGIN (write your solution here)
const toRoman = (arabicNumber) => {
    const result = [];
    const units = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
    };
    const dozens = {
        1: 'X',
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L',
        6: 'LX',
        7: 'LXX',
        8: 'LXXX',
        9: 'XC',
    };
    const hundreds = {
        1: 'C',
        2: 'CC',
        3: 'CCC',
        4: 'CD',
        5: 'D',
        6: 'DC',
        7: 'DCC',
        8: 'DCCC',
        9: 'CM',
    };
    const thousands = {
        1: 'M',
        2: 'MM',
        3: 'MMM',
    };
    const arabicString = arabicNumber.toString();
    const arabicArr = arabicString.split('');
    if (arabicArr.length === 4) {
        result.push(thousands[arabicArr[0]]);
        result.push(hundreds[arabicArr[1]]);
        result.push(dozens[arabicArr[2]]);
        result.push(units[arabicArr[3]]);
    } else if (arabicArr.length === 3) {
        result.push(hundreds[arabicArr[0]]);
        result.push(dozens[arabicArr[1]]);
        result.push(units[arabicArr[2]]);
    } else if (arabicArr.length === 2) {
        result.push(dozens[arabicArr[0]]);
        result.push(units[arabicArr[1]]);
    } else if (arabicArr.length === 1) {
        result.push(units[arabicArr[0]]);
    }
    return result.join('');
};

const toArabic = (romainNumber) => {
    if (romainNumber.includes('IIII')
        || romainNumber.includes('VX')) {
        return false;
    }
    const romainKey = {
        I: '1',
        V: '5',
        X: '10',
        L: '50',
        C: '100',
        D: '500',
        M: '1000',
    };
    let result = 0;
    const romainArr = romainNumber.split('');
    for (let i = 0; i < romainArr.length; i += 1) {
        const nextI = romainArr[i + 1];
        const thisI = romainArr[i];
        if (thisI === 'I') {
            if (nextI === 'V' || nextI === 'X') {
                result -= Number(romainKey[thisI]);
            } else {
                result += Number(romainKey[thisI]);
            }
        } else if (thisI === 'X') {
            if (nextI === 'L' || nextI === 'C') {
                result -= Number(romainKey[thisI]);
            } else {
                result += Number(romainKey[thisI]);
            }
        } else if (thisI === 'C') {
            if (nextI === 'D' || nextI === 'M') {
                result -= Number(romainKey[thisI]);
            } else {
                result += Number(romainKey[thisI]);
            }
        } else {
            result += Number(romainKey[thisI]);
        }
    }
    return result;
};

export { toArabic, toRoman };
// END


// учителя

// @ts-check
/* eslint no-restricted-syntax: [off, ForOfStatement] */

// BEGIN
const numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

const sortedNumerals = Object.entries(numerals)
    .sort(([, arabic1], [, arabic2]) => Math.sign(arabic2 - arabic1));

export const toRoman = (number) => {
    let digit = number;
    const result = [];
    for (const [roman, arabic] of sortedNumerals) {
        const repetitionsCount = Math.floor(digit / arabic);
        digit -= repetitionsCount * arabic;
        result.push(roman.repeat(repetitionsCount));
    }

    return result.join('');
};

export const toArabic = (romanNumber) => {
    let result = 0;
    let currentLine = romanNumber;
    for (const [roman, arabic] of sortedNumerals) {
        while (currentLine.indexOf(roman) === 0) {
            result += arabic;
            currentLine = currentLine.slice(roman.length);
        }
    }

    if (toRoman(result) !== romanNumber) {
        return false;
    }

    return result;
};
// END

// tree.js
// Реализуйте и экспортируйте функцию compressImages(), которая принимает на вход директорию, находит внутри нее картинки и "сжимает" их. Под сжиманием понимается уменьшение свойства size в метаданных в два раза. Функция должна вернуть новую директорию со сжатыми картинками и всеми остальными данными, которые были внутри этой директории.
//
//     Картинками считаются все файлы заканчивающиеся на .jpg.
//
//     Примеры
// const tree = mkdir('my documents', [
//     mkfile('avatar.jpg', { size: 100 }),
//     mkfile('passport.jpg', { size: 200 }),
//     mkfile('family.jpg', { size: 150 }),
//     mkfile('addresses', { size: 125 }),
//     mkdir('presentations')
// ]);
//
// const newTree = compressImages(tree);
// // То же самое, что и tree, но во всех картинках размер уменьшен в два раза

// мое
/* eslint-disable import/prefer-default-export */
// @ts-check

import _ from 'lodash';
import {
    mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const compressImages = (tree) => {
    const children = getChildren(tree);
    const newChildren = children.map((child) => {
        const newName = _.cloneDeep(getName(child));
        const meta = _.cloneDeep(getMeta(child));
        const newMeta = { ...meta, size: meta.size / 2 };
        if (isFile(child)) {
            if (child.name.includes('jpg')) {
                return mkfile(newName, newMeta);
            }
            return mkfile(newName, meta);
        }
        return mkdir(newName, getChildren(child), meta);
    });
    const newMeta = _.cloneDeep(getMeta(tree));
    const newTree = mkdir(getName(tree), newChildren, newMeta);
    return newTree;
};

export { compressImages };
// END


// учителя

/* eslint-disable import/prefer-default-export */
// @ts-check

import _ from 'lodash';
import {
    mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

// BEGIN
export const compressImages = (node) => {
    const children = getChildren(node);
    const newChildren = children.map((child) => {
        const name = getName(child);
        if (!isFile(child) || !name.endsWith('.jpg')) {
            return child;
        }
        const meta = getMeta(child);
        const newMeta = _.cloneDeep(meta);
        newMeta.size /= 2;
        return mkfile(name, newMeta);
    });
    const newMeta = _.cloneDeep(getMeta(node));
    return mkdir(getName(node), newChildren, newMeta);
};
// END

//
// findFilesByName.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и подстроку, а возвращает список файлов, имена которых содержат эту подстроку. Функция должна вернуть полные пути до файлов.
//
//     Примеры
// import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
// import findFilesByName from '../findFilesByName.js';
//
// const tree = mkdir('/', [
//     mkdir('etc', [
//         mkdir('apache'),
//         mkdir('nginx', [
//             mkfile('nginx.conf', { size: 800 }),
//         ]),
//         mkdir('consul', [
//             mkfile('config.json', { size: 1200 }),
//             mkfile('data', { size: 8200 }),
//             mkfile('raft', { size: 80 }),
//         ]),
//     ]),
//     mkfile('hosts', { size: 3500 }),
//     mkfile('resolve', { size: 1000 }),
// ]);
//
// findFilesByName(tree, 'co');
// // ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
// Подсказки
// Для реализации этой логики вам понадобится аккумулятор, в котором будет храниться путь от корня до текущего узла. При проваливании внутрь директорий к нему добавляется имя текущей директории. В остальном логика работы идентична примеру из теории.
//     Переменную, содержащую внутри себя путь от корня до текущего узла, можно назвать ancestry.
//     Для построения путей используйте функцию path.join().
//     Проверку вхождения строк можно делать с помощью функции str.includes().

// мое
// @ts-check

// import path from 'path';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const findFilesByName = (tree, search, path = tree.name) =>
    (getChildren(tree) || []).reduce((acc, n) => {
        const p = `${path}${n.name}${isFile(n) ? '' : '/'}`;
        acc.push(...findFilesByName(n, search, p));
        return acc;
    }, tree.type === 'file' && getName(tree).includes(search) ? [path] : []);

export default findFilesByName;
// END



// учителя

// @ts-check

import path from 'path';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const findFilesByName = (tree, string) => {
    const iter = (node, ancestry) => {
        const name = getName(node);
        const newAncestry = path.join(ancestry, name);
        if (isFile(node)) {
            return name.includes(string) ? newAncestry : [];
        }
        const children = getChildren(node);
        return children.flatMap((child) => iter(child, newAncestry));
    };
    return iter(tree, '');
};

export default findFilesByName;
// END

//
// convert.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив определённой структуры и возвращает объект, полученный из этого массива.
//
//     Массив устроен таким образом, что с помощью него можно представлять ассоциативные массивы. Каждое значение внутри него — это массив из двух элементов, где первый элемент — ключ, а второй — значение. В свою очередь, если значение тоже является массивом, то считается, что это вложенное представление ассоциативного массива. Другими словами, любой массив внутри исходного массива всегда рассматривается как данные, которые нужно конвертировать в объект.
//
// convert([]); // {}
// convert([['key', 'value']]); // { key: 'value' }
// convert([['key', 'value'], ['key2', 'value2']]); // { key: 'value', key2: 'value2' }
//
// convert([
//     ['key', [['key2', 'anotherValue']]],
//     ['key2', 'value2']
// ]);
// // { key: { key2: 'anotherValue' }, key2: 'value2' }


// мое
// @ts-check

// BEGIN (write your solution here)
const convert = (arr) => arr.reduce((acc, element) => {
    if (Array.isArray(element) && element.length) {
        if (typeof element[0] === 'string') {
            return { ...acc, [element[0]]: Array.isArray(element[1]) ? convert(element) : element[1] };
        }
        return { ...acc, ...convert(element) };
    }
    return { ...acc };
}, {});

export default convert;
// END


// учителя
// @ts-check

// BEGIN
const convert = (tree) => tree.reduce((acc, node) => {
    const [key, value] = node;
    const newValue = Array.isArray(value) ? convert(value) : value;
    return { ...acc, [key]: newValue };
}, {});

export default convert;
// END
//

// В программировании иногда приходится иметь дело с деньгами. В отличие от большинства других значений, деньги могут существовать в разных валютах, которые конвертируются друг в друга по определенным ставкам (они меняются со временем!). Из-за этого, часто, недостаточно просто хранить количество денег, нужно хранить и их валюту.
//
//   Достаточно давно разработчики заметили, что работа с деньгами происходит во всех проектах примерно одинаково. Это привело к созданию определенного подхода (шаблона проектирования) при работе с деньгами. В этом задании мы частично реализуем его.
//
//   Money.js
// Реализуйте и экспортируйте по умолчанию абстракцию "Деньги". Она знает о валюте денег, позволяет их конвертировать в другие валюты, выполнять арифметические операции и форматировать вывод. Список методов:
//
//   Money(value, currency = 'usd') – создает объект-деньги.
// Money.prototype.getValue() – возвращает стоимость в виде числа
// Money.prototype.getCurrency() – возвращает валюту денег
// Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано в указанную валюту
// Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму исходных и переданных денег, в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
// Money.prototype.format() – возвращает локализованное представление денег удобное для вывода
// const money1 = new Money(100);
//
// // Возвращает значение
// money1.getValue(); // 100
// money1.getCurrency(); // 'usd'
//
// // Конвертирует в указанную валюту и возвращает новое значение
// money1.exchangeTo('eur').getValue(); // 70
//
// const money2 = new Money(200, 'eur');
// money2.getValue(); // 200
// const money3 = money2.add(money1);
// money3.getValue(); // 270
// const money4 = money3.add(money1);
// money4.getValue(); // 340
//
// money1.format(); // "$100.00"
// money2.format(); // "€200.00"
//
// const money5 = new Money(10000);
// money5.format(); // "$10,000.00"
// Наша реализация поддерживает только две валюты: usd и eur без возможности расширения. Коэффициенты конверсии:
//
//   usd -> eur = 0.7
// eur -> usd = 1.2
// Подсказки
// Number.prototype.toLocaleString() – умеет форматировать вывод денег в нужной локали. Если передать undefined первым параметром, то установится текущая локаль. Пример работы метода:
//   (4000).toLocaleString(undefined, { style: 'currency', currency: 'gbp' });
// // => 4,000.00 £
// Пример реализации денег на js

// мое
// @ts-check
// BEGIN (write your solution here)
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

Money.prototype.getValue = function getValue() {
    return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(currency) {
    if (currency === this.getCurrency()) {
        return new Money(this.getValue(), currency);
    }
    if (currency === 'eur') {
        return new Money((this.getValue() * 0.7), currency);
    }
    return new Money((this.getValue() * 1.2), currency);
};

Money.prototype.add = function add(money) {
    const currency = this.getCurrency();
    const convertedMoney = money.exchangeTo(currency);
    const additionalValue = convertedMoney.getValue();
    return new Money(this.getValue() + additionalValue, currency);
};

Money.prototype.format = function format() {
    const currency = this.getCurrency();

    if (currency === 'eur') {
        return this.getValue().toLocaleString(undefined, { style: 'currency', currency });
    }

    return this.getValue().toLocaleString(undefined, { style: 'currency', currency });
};

export default Money;
// END


// учителя

// @ts-check
// BEGIN
const rates = {
    usd: {
        eur: 0.7,
    },
    eur: {
        usd: 1.2,
    },
};

export default function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

Money.prototype.format = function format() {
    // bad design (pass undefined to the function), but it is js
    return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};

Money.prototype.getValue = function getValue() {
    return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
    const currency = this.getCurrency();
    const currentValue = this.getValue();
    if (currency === newCurrency) {
        return new Money(currentValue, currency);
    }
    const newValue = currentValue * rates[currency][newCurrency];
    return new Money(newValue, newCurrency);
};

Money.prototype.add = function add(money) {
    const currency = this.getCurrency();
    const convertedMoney = money.exchangeTo(currency);
    const additionalValue = convertedMoney.getValue();
    return new Money(this.getValue() + additionalValue, currency);
};
// END
//
//
// Это задание хоть и небольшое, но хитрое, его иногда задают на собеседованиях. Если не получится его решить сразу – не сдавайтесь. Оно стоит того, чтобы разобраться. Посмотрите обсуждения, там будет множество подсказок в других формулировках.
//
//   magic.js
// Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:
//
//   Принимает на вход любое количество аргументов и возвращает функцию, которая, в свою очередь, принимает на вход любое количество аргументов и так до бесконечности (привет, рекурсия ;)).
// Аргументами могут быть только числа.
//   Результат вызова этой функции при проверке на равенство должен быть равен сумме всех аргументов всех подфункций.
//   import magic from './magic.js';
//
// magic() == 0; // true
// magic(5, 2, -8) == -1; // true
// magic(1, 2)(3, 4, 5)(6)(7, 10) == 38; // true
// magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13; // true
// Подсказки
// Объекты в JS по умолчанию имеют метод valueOf(), который вызывается автоматически в тех местах, где требуется преобразование к числовому значению (контекст арифметических операций и операций нестрогого сравнения). В ситуации выше, во время сравнения, JS вызовет valueOf() для нашей функции. Этим можно воспользоваться для того, чтобы возвращать сумму через valueOf().
//
//   const obj = {}
// obj + 3; // '[object Object]3'
// obj.valueOf = () => 3;
// obj + 7; // 10
// Алгоритм
// Для решения задачи вам понадобится создать внутри ещё одну функцию.
//   Возврат функции из функции позволит сохранять результат предыдущих вычислений.
//   Функции — это объекты, используйте данную особенность. Она позволит отдавать результат вычислений только в нужный момент.
//   Внимательно изучите теорию и примените подходы из неё для этой практики.

// мое

// @ts-check
// BEGIN (write your solution here)
const magic = (...args) => {
    const sum = args.reduce((acc, x) => acc + x, 0);
    const result = (...newArgs) => magic(sum, ...newArgs);
    result.valueOf = () => sum;
    return result;
};

export default magic;
// END

//
// Для работы с текстом в вебе бывает полезна функция truncate(), которая обрезает слишком длинный текст и ставит в конце многоточие:
//
//   truncate('long text', { length: 3 }); // lon...
// solution.js
// Реализуйте в классе Truncater конструктор и метод truncate(). Метод принимает текст и следующие опции:
//
//   separator - символ, заменяющий обрезанную часть строки
// length - максимальная длина исходной строки. Если строка короче, чем эта опция, то возвращается исходная строка.
//   Конфигурацию по умолчанию можно переопределить через конструктор класса и вторым аргументом метода truncate(). Оба способа можно комбинировать.
//
//   const truncater = new Truncater();
// truncater.truncate('one two'); // 'one two'
// truncater.truncate('one two', { 'length': 6 }); // 'one tw...'
//
// const truncater = new Truncater({ 'length': 6 });
// truncater.truncate('one two', { 'separator': '.' }); // 'one tw.'
// truncater.truncate('one two', { 'length': '3' }); // 'one...'
// Подсказки
// Опции по умолчанию заданы, как статическое свойство класса. Обратите на это внимание при объединении исходных опций с пользовательскими.

// мое

export default class Truncater {
    static defaultOptions = {
        separator: '...',
        length: 200,
    };

    // BEGIN (write your solution here)
    constructor(options = {}) {
        this.options = { ...this.constructor.defaultOptions, ...options };
    }

    truncate(text, options = {}) {
        const { length, separator } = { ...this.options, ...options };
        if (text.length > length) {
            return `${text.slice(0, length)}${separator}`;
        }
        return text;
    }
    // END
}


// учителя 

export default class Truncater {
    static defaultOptions = {
        separator: '...',
        length: 200,
    };

    // BEGIN
    constructor(options = {}) {
        this.options = { ...this.constructor.defaultOptions, ...options };
    }

    truncate(text, options = {}) {
        const { length, separator } = { ...this.options, ...options };
        return (text.length <= length) ? text : text.substring(0, length).concat(separator);
    }
    // END
}


// Эту задачу можно решить огромным числом способов. Почти наверняка ваш способ будет не такой, как решение учителя.
//
//   Мы не даём никаких подсказок насчет того, какие функции нужно использовать. Как минимум вы знаете главную тройку map, filter и reduce.
//
//   solution.js
// Реализуйте и экспортируйте по умолчанию функцию normalize() которая принимает на вход список городов и стран, нормализует их имена, сортирует города и группирует их по стране.
//
//   import normalize from './solution.js';
//
// const countries = [
//     { name: 'Miami', country: 'usa' },
//     { name: 'samarA', country: '  ruSsiA' },
//     { name: 'Moscow ', country: ' Russia' },
// ];
//
// normalize(countries);
// // {
// //   russia: [
// //     'moscow',
// //     'samara',
// //   ],
// //   usa: [
// //     'miami',
// //   ],
// // }
// Подсказки
// Сигналы
// Получить только уникальные значения можно через специальный объект Set
// Урок Set

// мое
// BEGIN (write your solution here)
const normalize = (col) => {
    const sortColl = col.map(({ name, country } = {}) => ({
        name: name.toLowerCase().trim(),
        country: country.toLowerCase().trim(),
    }));
    const normColl = sortColl.reduce((acc, object) => {
        if (Object.hasOwn(acc, object.country)) {
            if (!acc[object.country].includes(object.name)) {
                acc[object.country].push(object.name);
                acc[object.country].sort();
            }
        } else {
            acc[object.country] = [object.name];
        }
        return acc;
    }, {});
    return normColl;
};

export default normalize;
// END


// учителя
// BEGIN
export default (data) => data
  .map(({ name, country }) => ({ city: name.toLowerCase(), country: country.toLowerCase() }))
  .map(({ city, country }) => ({ city: city.trim(), country: country.trim() }))
  .map(({ city, country }) => [country, city])
  .sort() // sort countries and cities
  .reduce((acc, [country, city]) => {
      const citiesAcc = acc[country] ?? [];
      const cities = citiesAcc.concat(city);
      const uniqueCities = new Set(cities);
      return { ...acc, [country]: [...uniqueCities] };
  }, {});
// END

// JavaScript долгое время не поддерживал приватных свойств и методов. Для них появилось соглашение об именовании с нижнего подчёркивания _, чтобы предотвратить доступ ко внутренностям объекта в обход интерфейса. Но сама возможность прямого доступа остаётся. Нам предстоит разработать обёртку над объектом, защищающую его приватные свойства от прямого доступа.
//
//   protect.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект и позволяет обращаться только к "публичным" свойствам и методам. При попытке прочитать или перезаписать приватное или несуществующее свойство должно выбрасываться исключение.
//
//   import protect from '../protect.js';
//
// class Course {
//     constructor(name) {
//         this._name = name;
//     }
//
//     getName() {
//         return this._name;
//     }
// }
//
// const course = new Course('Object-oriented design');
// const protectedCourse = protect(course);
//
// course.getName(); // "Object-oriented design"
// protectedCourse.getName(); // "Object-oriented design"
// course._name; // "Object-oriented design"
// course._nonExists; // undefined
//
// protectedCourse._name; // Error
// protectedCourse._name = 'OOD'; // Error
// protectedCourse._nonExists; // Error
// В реализации используйте Proxy.
//
//   Подсказки
// Чтобы избежать потери контекста для методов, используйте связывание через bind.
//   Определить, что по ключу возвращается метод можно через оператор typeof.
// Документация обработчика set

/* eslint-disable no-param-reassign */

// BEGIN (write your solution here)
const validateProperty = (target, name) => {
    if (!(name in target)) {
        throw new Error(`Property "${name}" doesn't exist`);
    }
    if (name.startsWith('_')) {
        throw new Error(`Property "${name}" is protected`);
    }
};

export default (obj) => {
    const handlers = {
        set: (target, prop, value) => {
            validateProperty(target, prop);
            target[prop] = value;
            return true;
        },
        get: (target, prop) => {
            validateProperty(target, prop);
            const property = target[prop];
            return (typeof property === 'function') ? property.bind(obj) : property;
        },
    };
    const protectedObj = new Proxy(obj, handlers);
    return protectedObj;
};
// END



// dates.js
// Реализуйте и экспортируйте по умолчанию функцию, которая переводит входные данные в удобный для построения графика формат.
//
//   На вход эта функция принимает три аргумента: массив данных; дата начала периода; дата конца периода. Данные представлены в формате объекта вида { value: 14, date: '02.08.2018' }, а даты диапазона в формате 'yyyy-MM-dd'.
//
//   Диапазон дат задаёт размер выходного массива, который должна сгенерить реализуемая функция. Правила формирования итогового массива:
//
//   он заполняется записями по всем дням из диапазона begin - end.
//   если во входном массиве нет данных для какого-то дня из диапазона, то в свойство value записи этого дня установить значение 0.
// import buildRange from './dates.js';
//
// const dates = [
//     { value: 14, date: '02.08.2018' },
//     { value: 43, date: '03.08.2018' },
// ];
// const beginDate = '2018-08-01';
// const endDate = '2018-08-04';
//
// buildRange(dates, beginDate, endDate);
// // [
// //   { value: 0, date: '01.08.2018' },
// //   { value: 14, date: '02.08.2018' },
// //   { value: 43, date: '03.08.2018' },
// //   { value: 0, date: '04.08.2018' },
// // ]
// Подсказки
// Документация по функциям для работы с датами:
//
//   https://date-fns.org/v2.16.1/docs/eachDayOfInterval
//     https://date-fns.org/v2.16.1/docs/format


// мое
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';
// import has from 'lodash/has';

// BEGIN (write your solution here)
export default (datesArray, beginDate, endDate) => {
    const dateList = eachDayOfInterval({
        start: new Date(beginDate),
        end: new Date(endDate),
    });
    return dateList
      .map((el) => format(new Date(el), 'dd.MM.yyyy'))
      .map((date) => {
          const findedItem = datesArray.find((item) => item.date === date);
          return {
              value: findedItem ? findedItem.value : 0,
              date,
          };
      });
};



// учителя
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';
import has from 'lodash/has';

// BEGIN
const buildRange = (dates, start, end) => {
    const valuesByDate = dates.reduce((acc, { value, date }) => ({ ...acc, [date]: value }), {});
    const period = eachDayOfInterval({ start: new Date(start), end: new Date(end) });
    return period.map((date) => {
        const formattedDate = format(date, 'dd.MM.yyyy');
        const value = has(valuesByDate, formattedDate) ? valuesByDate[formattedDate] : 0;
        return { value, date: formattedDate };
    });
};

export default buildRange;
// END
//
// watcher.js
// Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая следит за изменением файла с заданной периодичностью. Функция должна возвращать идентификатор таймера, запущенного внутри.
//
//   Если файл был изменён со времени предыдущей проверки, то необходимо вызвать колбек. Если во время анализа файла (через fs.stat) произошла ошибка, то нужно остановить таймер и вызвать колбек, передав туда ошибку.
//
//   Отслеживание изменений файла должно начинаться с момента вызова функции. Параметры функции:
//
//   Путь до файла, который нужно отслеживать
// Период отслеживания
// Колбек, принимающий аргументом ошибку
// import watch from './watcher.js';
//
// const id = watch(filepath, 500, (err) => {
//     console.log('Wow!');
// });
//
// setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
// setTimeout(() => clearInterval(id), 5000); // остановить отслеживание через 5 секунд
// Подсказки
// stats.mtimeMs — время последнего изменения
// Date.now() — текущая дата
// clearInterval

// @ts-check
import fs from 'fs';

// BEGIN
export default (filepath, period, cb) => {
    // фиксируем время последней проверки - момент запуска функции
    let lastCheckTime = Date.now();
    // функция проверки файла
    const check = (timerId) => {
        fs.stat(filepath, (err, stats) => {
            // в случае ошибки отключаем таймер
            // и отдаем в колбэк ошибку
            if (err) {
                clearInterval(timerId);
                cb(err);
                return;
            }
            // извлекаем время последней модификации файла
            const { mtimeMs } = stats;
            // если файл был модифицирован после запуска функции,
            // вызываем колбэк и меняем время последней проверки
            if (mtimeMs > lastCheckTime) {
                cb(null);
                lastCheckTime = mtimeMs;
            }
        });
    };
    // создаем таймер и передаем его id в функцию проверки файла
    const timerId = setInterval(() => check(timerId), period);
    return timerId;
};
// END

//
// src/prettify.js
// Реализуйте и экспортируйте функцию по умолчанию, которая находит текст (дочерние текстовые узлы) внутри элемента <div> и оборачивает текст в параграф. Переводы строк и отступы изменяться не должны.
//
//   // <body>
//   //   <p>Boom</p>
//   //   text
//   //   <div>Bam</div>
//   // </body>
//   prettify(document);
// console.log(document.body.innerHTML);
// // <body>
// //   <p>Boom</p>
// //   text
// //   <div><p>Bam</p></div>
// // </body>
// Алгоритм
// Выберите все нужные узлы по тегу
// Обойдите каждый выбранный узел, найдите в его дочерних узлах (childNodes) текстовые узлы и замените их на новые узлы, содержащие тег <p>.
// Подсказки
// Очистка строки от пробельных символов: trim
// Замена узлов node.replaceWith()
// Проверка текстовых узлов: node instanceof Text

export default (document) => {
    const divs = [...document.getElementsByTagName('div')];

    divs.forEach((div) => {
        const textNodes = [...div.childNodes]
          .filter((child) => child instanceof Text)
          .filter((child) => child.textContent.trim() !== '');
        textNodes.forEach((node) => {
            const p = document.createElement('p');
            p.textContent = node.textContent;
            node.replaceWith(p);
        });
    });
};


// В Bootstrap есть компонент nav (Обязательно перейдите по ссылке и покликайте по нему). Один из вариантов этого компонента — это табы, которые переключаются по нажатию, без перезагрузки страницы.
//
// <nav>
//     <div class="nav nav-tabs">
//         <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">Home</button>
//         <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">Profile</button>
//     </div>
// </nav>
// <div class="tab-content">
//     <div class="tab-pane active" id="home">Home tab</div>
//     <div class="tab-pane" id="profile">Profile tab</div>
// </div>
// По клику на таб происходит следующее:
//
//   Класс active снимается с текущего элемента меню и активного блока с данными
// Класс active добавляется табу, по которому кликнули и соответствующему блоку с данными
// Сопоставление таба и блока данных идёт по идентификатору, который прописывается в атрибут data-bs-target табов. По клику на таб, код должен извлечь id, найти соответствующий элемент и сделать его активным, не забыв при этом снять класс active с таба и блока, которые были активными до клика.
//
//   src/application.js
// Реализуйте логику переключения табов.
//
//   Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов nav.
//
//   Подсказки
// В коде можно использовать глобальный объект document
// Селектор по data элементам [data-toggle], например: document.querySelectorAll('h1[data-key]');
// Получить необходимый data-атрибут можно через dataset
// Постарайтесь не завязываться на конкретные идентификаторы и элементы
// Если вы используете другой метод извлечения списка, например document.getElementsByClassName(), то обратите внимание, что он возвращает HTMLCollection, а не NodeList. HTMLCollection не поддерживает метод forEach(), однако вы можете привести такой список к массиву, например используя Array.from()
// Переключение должно работать на любой реализации: с использованием button и на div

export default () => {
    // BEGIN (write your solution here)
    const handle = (e, container) => {
        const targetTab = e.target;
        if (targetTab.classList.contains('active')) {
            return;
        }

        const targetTabContentId = targetTab.dataset.bsTarget;
        const targetTabContent = document.querySelector(targetTabContentId);

        const activeTab = container.querySelector('.active');
        const activeTabContentId = activeTab.dataset.bsTarget;
        const activeTabContent = document.querySelector(activeTabContentId);

        targetTab.classList.add('active');
        targetTabContent.classList.add('active');

        activeTab.classList.remove('active');
        activeTabContent.classList.remove('active');
    };

    const navs = document.querySelectorAll('.nav');
    navs.forEach((nav) => {
        const tabs = nav.querySelectorAll('[data-bs-toggle]');
        tabs.forEach((tab) => {
            tab.addEventListener('click', (event) => handle(event, nav));
        });
    });
    // END
};