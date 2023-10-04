import "../css/Loginstyles.css";

function LoginPage() {
  return (
    <>
      <h1>Loginpage</h1>
      <br />
      <div className="login-flex">
        <h3>Login</h3>
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button type="button" className="btn btn-secondary" id="login-btn">
          Login
        </button>
        <a href="#">Register</a>
      </div>
    </>
  );
}

export default LoginPage;
