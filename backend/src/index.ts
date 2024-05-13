import app from "./app";
import { _config } from "./config/config";
import connectDB from "./config/db";

const startServer = async () => {
  await connectDB();

  app.listen(_config.port, () => {
    console.log(`Server is running on port ${_config.port}`);
  });
};

startServer();
