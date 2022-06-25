const express = require('express')
const app = express() // express関数を呼び出し、appでexpressのクラスなどを利用できるようにする
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/posts')
const PORT = 5000
const mongoose = require('mongoose')

// データベース接続
require('dotenv').config()
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log('DBと接続中')
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })

// ミドルウェア
app.use(express.json()) // JSON形式にする
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => console.log('サーバーが起動しました'))
