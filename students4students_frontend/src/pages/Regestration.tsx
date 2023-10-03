import { useState } from "react";
interface FormData {
  email: string;
  password: string;
  username: string;
  first_name: string;
  surname: string;
  age: string;
  degree: string;
  semester: string;
  partner_company: string;
}

function Registration() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    username: "",
    first_name: "",
    surname: "",
    age: "",
    degree: "",
    semester: "",
    partner_company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/students4students/register",
        {
          // Ändern Sie die URL entsprechend Ihrer Django-Route
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Die Anfrage war erfolgreich
        console.log("Benutzer wurde erfolgreich registriert.");
        // Hier können Sie die Antwort vom Backend verarbeiten, wenn benötigt
      } else {
        // Die Anfrage war nicht erfolgreich
        console.error("Fehler bei der Registrierung.");
      }
    } catch (error) {
      console.error("Fehler bei der Anfrage:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <h1 className="margin">Registration</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group margin">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group margin">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group margin">
            <label htmlFor="inputAddress">Username</label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group margin">
            <label htmlFor="inputSurename">Vorname</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstname"
              placeholder="Klaus"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group margin">
            <label htmlFor="inputSurename">Nachname</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstname"
              placeholder="Mustermann"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group margin">
            <label htmlFor="inputSurename">Alter</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstname"
              placeholder=""
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group margin">
            <label htmlFor="inputSurename">Studiengang</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstname"
              placeholder="Informatik"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>
          <div className="form-group margin">
            <label htmlFor="inputSurename">Semester</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstname"
              placeholder="0"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
            />
          </div>
          <div className="form-group margin">
            <label htmlFor="inputSurename">Partner Unternehmen</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstname"
              placeholder="Mercedes-Benz AG"
              name="partner_company"
              value={formData.partner_company}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Registrierung
          </button>
        </form>
      </div>
    </>
  );
}

export default Registration;
