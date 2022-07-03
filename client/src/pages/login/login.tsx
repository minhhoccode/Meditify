import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="login-form">
        <div className="login-header">
          <h2>Sign in to account</h2>
          <p>Enter email and password to login</p>
        </div>
        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email Address</label>
            <input type="email" />
          </div>
          <div className="input-field">
            <label htmlFor="email">Password</label>
            <input type="password" />
          </div>
          <div className="input">
            <input type="checkbox" name="" id="remember" />
            <label htmlFor="remember">Remember Password</label>
          </div>
          <button className="button p-btn loginButton">Login</button>
          <div className="form-action">
            <span>Or Sign in with</span>
            <div className="option-container">
              <div className="option-box">
                <button>
                  <i className="fab fa-google "></i>
                  Google
                </button>
              </div>
              <div className="option-box">
                <button>
                  <i className="fa fa-facebook-square"></i>
                  Facebook
                </button>
              </div>
            </div>
            <div className="form-text">
              <p>
                Don't have account?{" "}
                <a href="#" className="loginRegisterButton">
                  Create Account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
