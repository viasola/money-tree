import "./Login.css";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-section">
        <div className="sub-login-section">
          <h3>WELCOME TO</h3>
          <h3>MONEY TREE</h3>
          <div className="input-group">
            <input type="text" id="name" placeholder=" " />
            <label for="name">Username: </label>
            {/* <input type="email" /> */}
          </div>
          <br />
          <label htmlFor="">Password: </label>
          <input type="password" />
          <br />
          <button type="button" class="btn btn-outline-info">
            <a href="#/home">
              <strong>LOG IN</strong>
            </a>
          </button>

          <br />
          <a href="#">SIGN UP FOR FREE</a>
        </div>
        <div className="socials-container">
          <div className="gmail">
            <SiGmail />
            Log in from Gmail
          </div>
          <div className="facebook">
            <BsFacebook />
            Log in from Facebook
          </div>
          <div className="twitter">
            <BsTwitter />
            Log in from Twitter
          </div>
        </div>
      </div>
    </div>
  );
}
