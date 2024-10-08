import express from "express";
const app = express();
const port = process.env.PORT || 3000;


// but this is bad praties so we do't follow like this
//distribute the static file in backend folder
// app.use(express.static('dist'))

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get the data user

app.get("/api/data", (req, res) => {
  const data = [
    {
      id: 21,
      title: "SD1",
      name: "sumit",
    },
    {
      id: 31,
      title: "SD2",
      name: "aman",
    },
    {
      id: 43,
      title: "front-end",
      name: "mayank",
    },
    {
      id: 91,
      title: "backend",
      name: "jon",
    },
  ];
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is run in port number is http://localhost:${port}`);
});
