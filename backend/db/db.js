import mongoose from "mongoose";

function connect() {
    
    if (!process.env.MONGO_URI) {
        console.error("ERROR: MONGO_URI is not defined in your .env file!");
        return;
    }

    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Successfully connected to MongoDB");
        })
        .catch(err => {
            console.error("MongoDB connection error details:");
            console.error(err);
        });
}

export default connect;