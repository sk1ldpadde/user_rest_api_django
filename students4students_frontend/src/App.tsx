import { useEffect, useState } from "react";
import "./css/App.css";
import BackendAPI from "./components/BackendAPI.tsx";
import RegisterPage from "./components/RegisterPage.tsx";

// Define the type for the objects in your JSON data
type DataItem = {
  id: number;
  name: string;
  faculty: number;
};

function App() {
  const [data, setData] = useState<DataItem[]>([]);

  // Create a function to fetch data
  async function fetchData() {
    try {
      let result = await BackendAPI.getDataFromBackend(BackendAPI.DEGREE_TABLE);

      // Assuming result is an array of DataItem objects
      console.log(result);
      setData(result); // Store the fetched data in the 'data' state variable
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once after component mounts

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <h2> All degrees </h2>
      <div>
        <RegisterPage />
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>Faculty: {item.faculty}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <button
          onClick={() => BackendAPI.getDataFromBackend(BackendAPI.DEGREE_TABLE)}
        >
          Click me
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
