const express = require('express')
const app = express() // express関数を呼び出し、appでexpressのクラスなどを利用できるようにする
const userRouter = require('./routes/users')
const PORT = 5000

// ミドルウェア
app.use('/api/users', userRouter)

app.listen(PORT, () => console.log('サーバーが起動しました'))
