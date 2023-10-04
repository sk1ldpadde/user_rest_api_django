import React from "react";
import "./App.css";
interface FormLogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formLogin, setFormLogin] = React.useState<FormLogin>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormLogin((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/students4students/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formLogin),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        // Die Anfrage war nicht erfolgreich
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="margin">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group margin">
            <label htmlFor="exampleInputEmail1">E-Mail</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={formLogin.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="form-group margin">
            <label htmlFor="exampleInputPassword1">Passwort</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={formLogin.password}
              onChange={handleChange}
              name="password"
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
