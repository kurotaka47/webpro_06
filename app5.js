const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1: message1, greet2: message2 });
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1: "Hello world", greet2: "Bon jour" });
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename: "./public/Apple_logo_black.svg", alt: "Apple Logo" });
});

app.get("/luck", (req, res) => {
  const num = Math.floor(Math.random() * 6 + 1);
  let luck = '';
  if (num == 1) luck = '大吉';
  else if (num == 2) luck = '中吉';
  console.log('あなたの運勢は' + luck + 'です');
  res.render('luck', { number: num, luck: luck });
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number(req.query.win);
  let total = Number(req.query.total);
  console.log({ hand, win, total });
  const num = Math.floor(Math.random() * 3 + 1);
  let cpu = '';
  if (num == 1) cpu = 'グー';
  else if (num == 2) cpu = 'チョキ';
  else cpu = 'パー';

  // 勝敗の判定
  let judgement = '';
  if (hand === 'グー') {
    if (cpu === 'グー') judgement = 'あいこ';
    else if (cpu === 'チョキ') {
      judgement = '勝ち';
      win += 1;
    } else judgement = '負け';
  } else if (hand === 'チョキ') {
    if (cpu === 'グー') judgement = '負け';
    else if (cpu === 'チョキ') judgement = 'あいこ';
    else {
      judgement = '勝ち';
      win += 1;
    }
  } else if (hand === 'パー') {
    if (cpu === 'グー') {
      judgement = '勝ち';
      win += 1;
    } else if (cpu === 'チョキ') judgement = '負け';
    else judgement = 'あいこ';
  } else {
    judgement = 'あいこ';
  }

  if (judgement !== 'あいこ') {
    total += 1;
  }

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render('janken', display);
});

app.get("/atti", (req, res) => {
  let hand = req.query.hand;
  let win = Number(req.query.win);
  let total = Number(req.query.total);
  console.log({ hand, win, total });
  const num = Math.floor(Math.random() * 4 + 1);
  let cpu = '';
  if (num == 1) cpu = '上';
  else if (num == 2) cpu = '下';
  else if (num == 3) cpu = '右';
  else cpu = '左';

  // 勝敗の判定
  let judgement = '';
  if (hand === '上') {
    if (cpu === '上') judgement = '負け';
    else if (cpu === '下') {
      judgement = '勝ち';
      win += 1;
    } else judgement = '勝ち';


  } else if (hand === '下') {
    if (cpu === '下') judgement = '負け';
    else if (cpu === '上') judgement = '勝ち';
    else {
      judgement = '勝ち';
      win += 1;
    }


  } else if (hand === '右') {
    if (cpu === '右') {
      judgement = '負け';
      win += 1;
    } else if (cpu === '上') judgement = '勝ち';
    else judgement = '勝ち';
  } else {
    judgement = '勝ち';
  }


 } else if (hand === '左') {
    if (cpu === '左') {
      judgement = '負け';
      win += 1;
    } else if (cpu === '上') judgement = '勝ち';
    else judgement = '勝ち';
  } else {
    judgement = '勝ち';
  }

  if (judgement !== '勝ち') {
    total += 1;
  }


app.get("/yubisuma", (req, res) => {
  let hand = req.query.hand;
  let win = Number(req.query.win);
  let total = Number(req.query.total);
  console.log({ hand, win, total });
  const num = Math.floor(Math.random() * 5 + 1);
  let cpu = '';
  if (num == 1) cpu = '0';
  else if (num == 2) cpu = '1';
  else if (num == 3) cpu = '2';
  else if (num == 4) cpu = '3';
  else cpu = '4';

  // 勝敗の判定
  let judgement = '';
  if (hand === '0') {
    if (cpu === '0') judgement = '負け';
    else if (cpu === '1') {
      judgement = '勝ち';
      win += 1;
    } else judgement = '勝ち';


  } else if (hand === '1') {
    if (cpu === '1') judgement = '負け';
    else if (cpu === '0') judgement = '勝ち';
    else {
      judgement = '勝ち';
      win += 1;
    }


  } else if (hand === '2') {
    if (cpu === '2') {
      judgement = '負け';
      win += 1;
    } else if (cpu === '0') judgement = '勝ち';
    else judgement = '勝ち';
  } else {
    judgement = '勝ち';
  }


 } else if (hand === '3') {
    if (cpu === '3') {
      judgement = '負け';
      win += 1;
    } else if (cpu === '0') judgement = '勝ち';
    else judgement = '勝ち';
  } else {
    judgement = '勝ち';
  }

 } else if (hand === '4') {
    if (cpu === '4') {
      judgement = '負け';
      win += 1;
    } else if (cpu === '0') judgement = '勝ち';
    else judgement = '勝ち';
  } else {
    judgement = '勝ち';
  }

  if (judgement !== '勝ち') {
    total += 1;
  }



  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render('janken', display);
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
