import express, { Request, Response } from "express";
const app = express();
const port = 3005;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// http://localhost:3005/test
app.get("/test", (req, res) => {
  let returnObj = {
    name: "test",
    age: 20,
    address: "Thai",
  };
  res.send(returnObj);
});

// http://localhost:3005/test?id=5
// app.get('/test', (req: Request, res: Response) => {
//   const id = req.query.id;   
//   const output = `id: ${id}`;
//   res.send(output);
// })

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
