import axios from "axios";

export async function Logger(stack, level, pkg, message) {
    try {

        const res = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: pkg,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        return res.data;

    } catch (err) {
    console.log("Status:", err.response?.status);
    console.log("Data:", err.response?.data);
}
}