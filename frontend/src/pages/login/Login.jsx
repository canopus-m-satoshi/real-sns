import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">REAL SNS APP</h3>
          <span className="loginDesc">本格的なSNSを、自分の手で。</span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <p className="loginMsg">ログインはこちら</p>
            <input
              type="email"
              className="loginInput"
              placeholder="Eメール"
              required
              // ref={email}
            />
            <input
              type="password"
              className="loginInput"
              required
              minLength="6"
              placeholder="パスワード"
              // ref={password}
            />
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
