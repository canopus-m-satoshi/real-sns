import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">MERN SNS APP</h3>
          <span className="registerDesc">本格的なSNSを、自分の手で。</span>
        </div>
        <div className="registerRight">
          <form className="registerBox">
            <p className="registerMsg">新規登録はこちら</p>
            <input
              type="email"
              className="registerInput"
              placeholder="ユーザー名"
              required
              // ref={email}
            />
            <input
              type="email"
              className="registerInput"
              placeholder="Eメール"
              required
              // ref={email}
            />
            <input
              type="password"
              className="registerInput"
              required
              minLength="6"
              placeholder="パスワード"
              // ref={password}
            />
            <input
              type="password"
              className="registerInput"
              required
              minLength="6"
              placeholder="確認用パスワード"
              // ref={password}
            />
            <button className="registerButton">サインアップ</button>
            <button className="loginRegisterButton">ログイン</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
