import axios from "axios";

export async function getDepots() {
    try {
        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/depots",
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        return response.data;

    } catch (err) {
        console.log("Status:", err.response?.status);
        console.log("Data:", err.response?.data);
    }
}