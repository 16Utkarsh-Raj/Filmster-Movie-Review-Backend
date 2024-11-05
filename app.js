const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("express-async-errors");
require("dotenv").config();
require("./db");
const userRouter = require("./routes/user");
const { errorHandler } = require("./middlewares/error");
const { handleNotFound } = require("./utils/helper");

const actorRouter = require("./routes/actor");
const movieRouter = require("./routes/movie");


// const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/actor", actorRouter);
app.use("/api/movie", movieRouter);

app.use("/*", handleNotFound);

app.use(errorHandler);

// console.log(app);

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello i am from backend server</h1>");
// })

// app.get("/about",(req,res)=>{
//     res.send("<h1>Hello i am from backend about</h1>");
// })

// app.post("/sign-in",(req,res,next)=>{
//     const {email,password}=req.body;
//     if(!email || !password)
//         return res.json({error:"email/password is missing!!"});
//     next();

//     },
//     (req,res)=>{
//         res.send("<h1>Hello i am about page</h1>");
//     }
// );

app.listen(8000, () => {
  console.log("the port is listening on port 8000");
});
