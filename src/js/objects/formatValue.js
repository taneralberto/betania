const isCurrencyValue = (val) => /^[0-9]$/.test(val);
const getNumbers = (val) => val.replace(/[^0-9]/g, '');
const formatValue = (val, currency = '$') => {
  const floatVal = +val.replace(/(\d{2})$/, '.$1');
  const splitedVal = floatVal.toFixed(2).split('.');
  return `${splitedVal[0].replace(/(?=(\d{3})+(?!\d))/g, '.').replace(/^\./g, '')}.${splitedVal[1]}`;
}

const bindMoneyInput = (input) => {
  const inputDataset = input.dataset;
  const currency = inputDataset.currency || '$';
  const defaultValue = `${currency} 0.00`;
  const maxLength = +input.getAttribute('max-length') || 9;
  const valueLength = maxLength + `00`.length;

  inputDataset.currency = currency;
  input.setAttribute('inputmode', 'numeric');
  input.setAttribute('max-length', valueLength);
  input.setAttribute('placeholder', defaultValue);
  inputDataset.currentValue = defaultValue;

  input.addEventListener('input', (event) => {
    const { data: input, target } = event;
    const targetDataset = target.dataset;
    const currentValue = targetDataset.currentValue;
    const clearVal = getNumbers(currentValue);
    const preventedValue = target.value;
    const maxLength = target.getAttribute('max-length');

    /*
    TODO: Add/remove values in the middle of the string using the properties below
    */
    //const cursorStart = target.selectionStart;
    //const cursorEnd = target.selectionEnd;
    //const selectionLength = cursorEnd - cursorStart;
    //console.log(currentValue, input, preventedValue, cursorStart, cursorEnd, selectionLength);

    let newVal;
    if (!input) {
      if (preventedValue.length === 0) {
        newVal = defaultValue;
      } else {
        newVal = formatValue(clearVal.slice(0, -1), currency);
      }
    } else {
      if (isCurrencyValue(input)) {
        if (preventedValue.length > 1) {
          newVal = `${clearVal}${input}`;
        } else {
          newVal = `00${input}`;
        }
        newVal = formatValue(newVal, currency);
      }
      newVal = newVal && getNumbers(newVal).length <= maxLength
        ? newVal
        : currentValue;
    }

    target.value = targetDataset.currentValue = newVal;

  }, false);
}

const inputMoneyList = document.querySelectorAll('.input-money');
for (input of inputMoneyList) bindMoneyInput(input);