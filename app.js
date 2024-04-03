import express from "express";
import cors from "cors";

const app = express();

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
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

export default app;