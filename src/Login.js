import './Login.css'

export default function Login() {
  return (
    <div className="login-section">
      <div className="sub-login-section">
      <h3>WELCOME TO</h3>
      <h3>MONEY TREE</h3>

      <label htmlFor="">Username:</label>
      <input type="email" />
      <br />
      <label htmlFor="">Password:</label>
      <input type="password" />
      <br />
      <a href="#/home">LOG IN</a>
      <br />
      <a href="#">SIGN UP FOR FREE</a>
    </div>
    </div>
  )
}

