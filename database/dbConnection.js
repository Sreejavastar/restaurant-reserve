import mongoose from "mongoose";

export const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "RESTDB",
        });
        console.log('🍃 MongoDB server connected');
    } 
    catch (err) {
        console.error('Error connecting to the database: ',err)
    };
};