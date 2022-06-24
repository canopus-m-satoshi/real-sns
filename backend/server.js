const express = require('express')
const app = express() // express関数を呼び出し、appでexpressのクラスなどを利用できるようにする
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/posts')
const PORT = 5000

// ミドルウェア
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

app.listen(PORT, () => console.log('サーバーが起動しました'))
