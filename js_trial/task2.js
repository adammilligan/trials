const capitalLetters = (string) => {
  const result = [];
  for (let i = 0; i < string.length; i += 1) {
    if ((string[i] >= "A" && string[i] <= "Z") || (string[i] >= "А" && string[i] <= "Я")) {
      result.push(string[i]);
    };
  };
  return result.join('');
};

console.log(capitalLetters('United States of America?!'))
console.log(capitalLetters('Сегодня победил ЦСКА :)'))
