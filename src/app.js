import express from "express";
import dotenv from "dotenv";

import { getDepots } from "./services/depotService.js";
import { getVehicles } from "./services/vehicleService.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Working");
});

app.get("/depots", async (req, res) => {

    const data = await getDepots();

    res.json(data);
});

app.get("/vehicles", async (req, res) => {

    const data = await getVehicles();

    res.json(data);
});

app.listen(3000, () => {
    console.log("Server Running...");
});