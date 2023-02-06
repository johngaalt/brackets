module.exports = function check(string, config) {
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    let currentChar = string.charAt(i);

    for (let j = 0; j < config.length; j++) {
      let openBracket = config[j][0];
      let closeBracket = config[j][1];

      if (currentChar === openBracket) {
        stack.push(closeBracket);
        break;
      } else if (currentChar === closeBracket) {
        if (stack.length === 0 || stack[stack.length - 1] !== closeBracket) {
          return false;
        }
        stack.pop();
        break;
      }
    }
  }

  return stack.length === 0;
};
