import "./register.scss";

export default function register() {
  return (
    <div className="register">
      <div className="register-form">
        <div className="register-header">
          <h2>Register</h2>
          <p>Enter email and password to register</p>
        </div>
        <div className="form">
          <div className="input-field">
            <label htmlFor="UserName">User Name</label>
            <input className="registerInput" type="UserName" />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email Address</label>
            <input className="registerInput"  type="email" />
          </div>
          <div className="input-field">
            <label htmlFor="email">Password</label>
            <input className="registerInput" type="password" />
          </div>
          <div className="input">
            <input type="checkbox" name="" id="remember" />
            <label htmlFor="remember">Remember Password</label>
          </div>
          <button className="button p-btn registerButton">register</button>
          <div className="form-action">
            <span>Or Sign Up with</span>
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
               Have a account?{" "}
                <a href="#" className="registerRegisterButton">
                  Login Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}