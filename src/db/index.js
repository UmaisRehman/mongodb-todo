import mongoose from "mongoose";
 

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI}todo`
          );
          console.log(
            `\n MongoDB connected`
          );
    }
    catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;