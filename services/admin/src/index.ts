import express from "express";
import dotenv from "dotenv";
import adminRoutes from "./route/admin.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors())
app.use("/api/v1", adminRoutes)

const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Admin service is running on port ${process.env.PORT}`);
});
