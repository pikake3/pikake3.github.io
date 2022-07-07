'use strict'
// Please don't delete the 'use strict' line above

function getResult(unitarray) {
  let amount = document.getElementById('amount').value;
  let num = document.getElementById('num').value;
  //金額ブランクのとき
  if (amount === "") {
    document.getElementById('result').innerHTML = "金額を入れてください"
    return;
  }
  //人数ブランクのとき
  if (num === "") {
    document.getElementById('result').innerHTML = "人数を入れてください"
    return;
  }

  //条件に該当したら強制修正の内容メッセージを作る
  let message = '';
  //金額マイナスは正にします
  if (amount < 0) {
    amount *= (-1);
    document.getElementById('amount').value = amount;
    message += '<font color="red">金額を修正します(' + amount * -1 + '円→' + amount + '円）</font><P>';
  }
  //金額小数点ありは切り捨てます
  if (Math.floor(amount) != amount) {
    amount = Math.floor(amount);
    message += '<font color="red">金額の小数点以下は切り捨てます</font><P>'
    document.getElementById('amount').value = amount;
  }
  //人数0以下は1人に修正します
  if (num <= 0) {
    message += '<font color="red">人数を修正します(' + num + '人→';
    num *= (-1);
    if (num === 0) num = 1;
    document.getElementById('num').value = num;
    message += num + "人）</font><P>"
  }
  //人数小数点ありは切り捨てます
  if (Math.floor(num) != num) {
    num = Math.floor(num);
    message += '<font color="red">人数を整数にします</font><P>';
    document.getElementById('num').value = num;
  }
  
  //条件に該当あればメッセ（なければメッセ初期値空）に続けて計算してメッセ。
  message += "<table border=1>";
  for (let unit of unitarray) {
    let x = Math.floor((amount / num) / unit) * unit;
    let y = amount - (x * num);

    let _x = Math.ceil((amount / num) / unit) * unit;
    let _y = (_x * num) - amount;

    message += "<tr><td>" + unit + '円単位だと</td><td>' + '1人<font size=+2><b>' + x + '</b></font>円で' + y + '円足りません。<br>' + '1人<font size=+2><b>' + _x + '</b></font>円で' + _y + '円余ります。</td></tr>'
  }
  message += "</table>"
  document.getElementById('result').innerHTML = message;
}
