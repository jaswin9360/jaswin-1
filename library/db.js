import mongoose from "mongoose";


const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://jaswinkumar00:AwdmTJI7hPGZjm5R@cluster0.kiu03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log("connected....");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
        
    }
    
};

export default connectdb;