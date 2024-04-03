import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import app from './app.js';
import { dbConnection } from './database/dbConnection.js';

dbConnection().then(() => {
    app.listen(process.env.PORT, ()=>{
        console.log(`🗄️  Server is running on port ${process.env.PORT}`);
    });
})