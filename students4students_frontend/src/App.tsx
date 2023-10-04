
//import Registration from "./pages/Regestration.tsx";
import Navbar from "./layout/Navbar.tsx";
import Degrees from "./components/Degrees.tsx";
import Registration from "./pages/Regestration.tsx";
import Login from "./pages/Login.tsx";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Degrees />;
      break;

    case "/registration":
      component = <Registration />;
      break;

    case "/login":
      component = <Login />;
      break;
  }

  return (
    <>
      <div>
        <Navbar />
        {component}
      </div>
    </>
  );
}

export default App;
