import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  db_uri: process.env.DB_URI,
  port: process.env.PORT,
};

export default config;
