import dotenv from "dotenv";
import { getVehicles } from "./services/vehicleService.js";

dotenv.config();

const data = await getVehicles(2);

console.log(JSON.stringify(data, null, 2));