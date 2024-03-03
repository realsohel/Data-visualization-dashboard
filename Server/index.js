import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dataRoute from "./routes/dataRoute.js"
import queryString from "query-string";


dotenv.config();
const app = express()
const PORT = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
};

app.get("/", (req, res) => {
    res.send("hello server");
});

const connectDB = async () => {
    
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        });
    
        console.log("MongoDB database connected");
    } catch (err) {
        console.log("MongoDB database connection failed",err);
    }
};


app.set('query parser', (str) => queryString.parse(str))
// middleware
app.use(cors(corsOptions));

app.use("/api/v1/", dataRoute);


app.listen(PORT, () => {
    connectDB();
    console.log("server listening on port " + PORT);

});
