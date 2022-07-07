'use strict'
// Please don't delete the 'use strict' line above

function getResult(unitarray) {
  const amount = document.getElementById('amount').value;
  const num = document.getElementById('num').value;
  
  let message = '';
  for (let unit of unitarray) {
    let x = Math.floor((amount / num) / unit ) * unit;
    let y = amount - (x * num);

    let _x =  Math.ceil((amount / num) / unit ) * unit;
    let _y = (_x * num) - amount;

    message += unit+'円単位だと<br>' + '1人' + x + '円で' + y + '円足りません。<br>' + '1人' + _x + '円で' + _y + '円余ります。<p>'
  }
  document.getElementById('result').innerHTML = message;
}
