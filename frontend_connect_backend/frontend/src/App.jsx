import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>look it done</h1>
      <p>data: {data.length}</p>
      <br />
      <br />
      {data.map((value) => (
        <div key={value.id}>
          <h3>title is:</h3>
          {value.title}
          <h4>name is:</h4>
          {value.name}
          <br />
          <br />
          <br />
          <br />
        </div>
      ))}
    </>
  );
}

export default App;
