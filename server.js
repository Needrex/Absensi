import { app } from "./src/application/app.js";
import dotenv from "dotenv";
import { logger } from "./src/application/logger.js";

dotenv.config({ path: './config/.env' })

const PORT = process.env.PORT
app.listen(PORT, () => {
   logger.info(`RUN IN PORT ${PORT}`);
})