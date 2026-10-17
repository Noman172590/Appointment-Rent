
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer;

const connectDB = async () => {
  try {
    // Start an in-memory MongoDB server
    mongoServer = await MongoMemoryServer.create();

    const mongoUri = mongoServer.getUri();

    // Connect Mongoose to the in-memory database
    await mongoose.connect(mongoUri, {
      dbName: "house_rent",
    });

    console.log("MongoDB Memory Server connected successfully");
    console.log("Database: house_rent");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);

    if (mongoServer) {
      await mongoServer.stop().catch(() => {});
      mongoServer = null;
    }

    throw error;
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();

    if (mongoServer) {
      await mongoServer.stop();
      mongoServer = null;
    }

    console.log("MongoDB Memory Server stopped");
  } catch (error) {
    console.error("Database shutdown failed:", error.message);
  }
};

export default connectDB;
