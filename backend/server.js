const express = require('express')
const app = express() // express関数を呼び出し、appでexpressのクラスなどを利用できるようにする
const PORT = 5000

app.get('/', (req, res) => {
  res.send('hello express')
})

app.listen(PORT, () => console.log('サーバーが起動しました'))
