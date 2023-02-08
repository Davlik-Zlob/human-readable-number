module.exports = function toReadable (number) {
  let stringNumber = number.toString();
  let redableNumber = '';
  let aToString = (a) => {
    switch(a) {
      case 0: return '';
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
    }
  }
  let bToString = (b) => {
    switch(b) {
      case 10: return 'ten';
      case 11: return 'eleven';
      case 12: return 'twelve';
      case 13: return 'thirteen';
      case 14: return 'fourteen';
      case 15: return 'fifteen';
      case 16: return 'sixteen';
      case 17: return 'seventeen';
      case 18: return 'eighteen';
      case 19: return 'nineteen';
    }
  }
  let cToString = (c) => {
    switch(c) {
      case 2: return 'twenty';
      case 3: return 'thirty';
      case 4: return 'forty';
      case 5: return 'fifty';
      case 6: return 'sixty';
      case 7: return 'seventy';
      case 8: return 'eighty';
      case 9: return 'ninety';
    }
  }
  if (number === 0) {
    redableNumber = 'zero';
  }
  if (number > 0 && number < 10) {
    redableNumber = aToString(number);
  }
  if (number > 9 && number < 20) {
    redableNumber = bToString(number);
  }
  if (number > 19 && number < 100) {
    redableNumber = `${cToString(+stringNumber[0])} ${aToString(+stringNumber[1])}`
  }
  if (number > 99 && number < 1000) {
    if (number % 100 < 10) {
      redableNumber = `${aToString(+stringNumber[0])} hundred ${aToString(number % 100)}`
    }
    if (number % 100 > 9 && number % 100 < 20) {
      redableNumber = `${aToString(+stringNumber[0])} hundred ${bToString(number % 100)}`
    }
    if (number % 100 > 19) {
      redableNumber = `${aToString(+stringNumber[0])} hundred ${cToString(+stringNumber[1])} ${aToString(+stringNumber[2])}`
    }
  }
  return redableNumber.trim();
}
