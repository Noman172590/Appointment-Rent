
import "dotenv/config";
import app from "./app.js";
import connectDB, { disconnectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

let server;

const startServer = async () => {
  try {
    // Connect database before starting Express
    await connectDB();

    server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

const shutdown = async () => {
  console.log("Shutting down server...");

  if (server) {
    server.close(async () => {
      await disconnectDB();
      process.exit(0);
    });
  } else {
    await disconnectDB();
    process.exit(0);
  }
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

startServer();
