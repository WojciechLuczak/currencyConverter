function getSelectedValue(selector) {
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

function convertCurrency() {
  let amount = getAmountValue();
  let from = getSelectedValue('#from');
  let to = getSelectedValue('#to');

  if (from === to) {
    document.querySelector('#result').innerHTML = 'Wybierz waluty inne od siebie!';
    return;
  }

  let rate = getExchangeRate(from, to);

  if (isNaN(amount) || amount <= 0) {
    document.querySelector('#result').innerHTML = 'Wpisz dodatnią liczbę';
    return;
  }

  let result = amount * rate;
  document.querySelector('#result').innerHTML = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}

const convertButton = document.querySelector('button');
convertButton.addEventListener('click', convertCurrency);