import "./Login.css";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Login() {
  return (
    <div className="login-container">
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form className="sign-in-form" action="#">
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="login-span">or use your email for registration</span>
            <input type="text" className="sign-in-page-input" placeholder="Name" />
            <input type="email" className="sign-in-page-input" placeholder="Email" />
            <input type="password" className="sign-in-page-input" placeholder="Password" />
            <button className="login-screen-buttons">Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form className="sign-in-form" action="#">
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" className="sign-in-page-input" placeholder="Email" />
            <input type="password" className="sign-in-page-input" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button className="login-screen-buttons"> <a href="#/home">Sign In</a> </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

