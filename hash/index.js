// Реализуйте и экспортируйте набор функций, для работы со словарём, построенным на хеш-таблице. Для простоты, наша реализация не поддерживает разрешение коллизий.
//
//     По сути в этом задании надо реализовать объекты. По понятным причинам использовать объекты для создания объектов нельзя. Представьте что в языке объектов нет и мы их хотим добавить.
//
// make() — создаёт новый словарь
// set(map, key, value) — устанавливает в словарь значение по ключу. Работает и для создания и для изменения. Функция возвращает true, если удалось установить значение. При возникновении коллизии, функция никак не меняет словарь и возвращает false
// get(map, key, defaultValue = null) — возвращает значение указанного ключа. Параметр defaultValue — значение, которое функция возвращает, если в словаре нет ключа (по умолчанию равно null). При возникновении коллизии функция также возвращает значение по умолчанию
// Функции set() и get() принимают первым параметром словарь. Передача идёт по ссылке, поэтому set() может изменить его напрямую.


import crc32 from 'crc-32';

// BEGIN (write your solution here)
const make = () => ([]);

const set = (map, key, value) => {
    const hash = crc32.str(key);
    const index = Math.abs(hash) % 1000;
    if (!map[index] || map[index][0] === key) {
        map[index] = [key, value];
        return true;
    }
    return false;
};

const get = (map, key, defaultValue = null) => {
    const hash = crc32.str(key);
    const index = Math.abs(hash) % 1000;
    if (Array.isArray(map[index])) {
        if (map[index][0] !== key) {
            return null;
        }
        return map[index][1] || defaultValue;
    }
    return defaultValue;
};

export { make, set, get };
// END


// учитель


// // @ts-check
// /* eslint-disable no-param-reassign */
//
// import crc32 from 'crc-32';
//
// // BEGIN
// const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;
//
// const make = () => [];
//
// const hasCollision = (map, key) => {
//     const index = getIndex(key);
//     const [currentKey] = map[index];
//     return currentKey !== key;
// };
//
// const set = (map, key, value) => {
//     const index = getIndex(key);
//     if (map[index] && hasCollision(map, key)) {
//         return false;
//     }
//     map[index] = [key, value];
//
//     return true;
// };
//
// const get = (map, key, defaultValue = null) => {
//     const index = getIndex(key);
//     if (!map[index] || hasCollision(map, key)) {
//         return defaultValue;
//     }
//     const [, value] = map[index];
//
//     return value;
// };
//
// export { make, set, get };
// // END
