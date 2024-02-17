import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const app = express();


app.use(bodyParser.json({limit: "30mb", extended: "true"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}));
app.use(cors())


const temp  = (req, res) => res.send("Hello from my memories api")


// routes


import posts from "./routes/posts.js"

app.get("/posts",posts)

app.get("/",temp );

const PORT = 5000


// const uri = "mongodb+srv://mymemory:0NcwCJpLL9f3XCco@cluster0.l2t6c.mongodb.net/posts_db?retryWrites=true&w=majority"
const uri = "mongodb+srv://mymemory:0NcwCJpLL9f3XCco@cluster0.l2t6c.mongodb.net/personal?retryWrites=true&w=majorit"


try {
    await mongoose.connect(uri);
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`), 
    console.log("Mongodb is connected") );
  } catch (error) {
    console.error(`Connection issues: ${error}`);
  }
  