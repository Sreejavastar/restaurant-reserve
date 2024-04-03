import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({path: "./config/config.env"});

app.use(
    cors(
        {   
            origin: [process.env.FRONTEND_URL],
            methods: ["POST"],
            credentials: true,
        }
    )
);

app.use(express.json()); //the string we are inputting is going to get converteed into json object
app.use(express.urlencoded({extended : true}));
dbConnection();

export default app;