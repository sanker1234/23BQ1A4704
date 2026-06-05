import dotenv from "dotenv";
import { getDepots } from "./services/depotService.js";

dotenv.config();

const data = await getDepots();

console.log(JSON.stringify(data, null, 2));