import express from "express";
import userRoutes from "./UserService/routes";
const serverless = require('serverless-http');

const app: express.Application = express();

const port: number = 5000;

app.use(express.json());
app.use("/user", userRoutes);

if (process.env.ENVIRONMENT == "development") {
    app.listen(port, () => {
        console.log("Server running on port " + port);
    });
}

module.exports.handler = serverless(app);