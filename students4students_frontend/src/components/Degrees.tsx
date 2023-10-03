import { useEffect, useState } from "react";

// Define the type for the objects in your JSON data
type DataItem = {
  id: number;
  name: string;
  faculty: number;
};

function Degrees() {
  const [data, setData] = useState<DataItem[]>([]);

  // Create a function to fetch data
  const fetchData = async () => {
    try {
      // Replace this URL with the endpoint you are fetching data from
      const apiUrl = "http://localhost:8000/students4students/degrees";
      const response = await fetch(apiUrl);
      const result = await response.json();

      // Assuming result is an array of DataItem objects
      setData(result); // Store the fetched data in the 'data' state variable
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once after component mounts

  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default Degrees;
