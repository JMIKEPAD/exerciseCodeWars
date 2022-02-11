


function validatePIN (pin) {
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let count = 0;
    let pinArr = pin.split('');
    for (let i of pinArr) {
      if (num.includes(i)) {
        count += 1;
      } else {
        return false;
      }
    }
    return count == 4 || count == 6;
  }