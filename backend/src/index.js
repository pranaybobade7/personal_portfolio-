import dotenv from "dotenv";
dotenv.config();

import { app } from "./app.js";
import { connectDB } from "./db/database.js";
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Started on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start the server:", err);
    process.exit(1);
  });
