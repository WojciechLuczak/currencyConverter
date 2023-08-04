{function getSelectedValue(selector) {
  const element = document.querySelector(selector);
  return element.value;
}

function getAmountValue() {
  const amount = parseFloat(document.querySelector('#amount').value);
  return amount;
}

function getExchangeRate(from, to) {
  switch (from) {
    case 'PLN':
      switch (to) {
        case 'USD':
          return 0.26;
        case 'EUR':
          return 0.22;
        default:
          return 1;
      }
    case 'USD':
      switch (to) {
        case 'PLN':
          return 3.85;
        case 'EUR':
          return 0.85;
        default:
          return 1;
      }
    case 'EUR':
      switch (to) {
        case 'PLN':
          return 4.53;
        case 'USD':
          return 1.17;
        default:
          return 1;
      }
    default:
      return 1;
  }
}

function setResult(chosenResult) {
  document.querySelector('#result').innerHTML = chosenResult;
}

function convertCurrency() {
  let amount = getAmountValue();
  let from = getSelectedValue('#from');
  let to = getSelectedValue('#to');
  let rate = getExchangeRate(from, to);

  if (from === to) {
    setResult('Wybierz waluty inne od siebie!');
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    setResult('Wpisz dodatnią liczbę');
    return;
  }

  let result = amount * rate;
  setResult(`${amount} ${from} = ${result.toFixed(2)} ${to}`);
}
function init() {
  const convertButton = document.querySelector('button');
  convertButton.addEventListener('click', convertCurrency);
}
init();
}