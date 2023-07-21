let convertButton = document.querySelector('button');
convertButton.addEventListener('click', function() {
  let amount = parseFloat(document.querySelector('#amount').value);
  let from = document.querySelector('#from').value;
  let to = document.querySelector('#to').value;

  let rate;


  switch (from) {
    case 'PLN':
      switch (to) {
        case 'USD':
          rate = 0.26;
          break;
        case 'EUR':
          rate = 0.22;
          break;
        default:
          rate = 1; 
          break;
      }
      break;
    case 'USD':
      switch (to) {
        case 'PLN':
          rate = 3.85;
          break;
        case 'EUR':
          rate = 0.85;
          break;
        default:
          rate = 1; 
          break;
      }
      break;
    case 'EUR':
      switch (to) {
        case 'PLN':
          rate = 4.53;
          break;
        case 'USD':
          rate = 1.17;
          break;
        default:
          rate = 1; 
          break;
      }
      break;
    default:
      rate = 1; 
      break;
  }


  if (isNaN(amount) || amount <= 0) {
    document.querySelector('#result').innerHTML = 'Wpisz dodatnią liczbę';
    return; }

    let result = amount * rate;

    document.querySelector('#result').innerHTML = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
});