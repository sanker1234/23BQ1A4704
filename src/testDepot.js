import dotenv from "dotenv";
import { getDepots } from "./services/depotService.js";

dotenv.config();

const data = await getDepots();

console.log(data);