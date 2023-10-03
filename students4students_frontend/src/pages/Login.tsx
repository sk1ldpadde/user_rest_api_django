import React from "react";
import "./App.css";

const Login: React.FC = () => {
  return (
    <>
      <div className="container">
        <h1 className="margin">Login</h1>
        <form>
          <div className="form-group margin">
            <label htmlFor="exampleInputEmail1">Nutzername</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group margin">
            <label htmlFor="exampleInputPassword1">Passwort</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Einloggen
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
