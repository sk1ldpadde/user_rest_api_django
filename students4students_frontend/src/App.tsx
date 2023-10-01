import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Define the type for the objects in your JSON data
type DataItem = {
  id: number;
  name: string;
  faculty: number;
};

function App() {
  const [data, setData] = useState<DataItem[]>([]);
  const [count, setCount] = useState(0)

  // Create a function to fetch data
  const fetchData = async () => {
    try {
      // Replace this URL with the endpoint you are fetching data from
      const apiUrl = 'http://localhost:8000/students4students/degrees';
      const response = await fetch(apiUrl);
      const result = await response.json();

      // Assuming result is an array of DataItem objects
      setData(result); // Store the fetched data in the 'data' state variable
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once after component mounts

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2> All degrees </h2>
      <div>
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
