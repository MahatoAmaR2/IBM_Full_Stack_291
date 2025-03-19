const express = require("express");
const userRouter = require("./routes/user.route.js");
const app = express();
app.use(express.json());

const PORT = 8080;
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Har Har Mahadev Day23</h1>`);
});

app.use(userRouter)

app.get("/protected", (req, res)=>{
  res.send("User is authorized");
  
})
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
