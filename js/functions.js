function stringAnalyser (string, stringNumber) {
  if (string.length <= stringNumber) {
    return true;
  }
  return false;
}

stringAnalyser ('Привет', 10);

// eslint-disable-next-line no-console
console.log(stringAnalyser ('Привет', 10));


function palindromCheck (palindromString) {
  let isPalindrom = palindromString.replaceAll(' ', '');
  isPalindrom = isPalindrom.toLowerCase();
  let isPalindromAdditional = '';

  for (let i = isPalindrom.length - 1; i >= 0; i--) {
    isPalindromAdditional += isPalindrom[i];
  }

  if (isPalindromAdditional === isPalindrom) {
    return true;
  }
  return false;
}

palindromCheck('Привет как дела');


//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает
//их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN


function getParseInt (stringCheck) {

  let numberInsertion = '';
  let numberSingle;
  for (let i = 0; i <= stringCheck.length - 1; i++) {
    numberSingle = parseInt(stringCheck[i],10);
    if (Number.isNaN(numberSingle)) {
      // eslint-disable-next-line no-console
      console.log('Это не число');
    } else {
      numberInsertion += numberSingle.toString();
    }
  }
  return (numberInsertion);
}

getParseInt('fer2 2332');
