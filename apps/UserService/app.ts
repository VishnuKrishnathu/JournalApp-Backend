import express from "express";
import userRoutes from "./routes";

const app: express.Application = express();

const port: number = 5000;

app.use(express.json());
app.use("/user", userRoutes);

app.listen(port, () => {
    console.log("Server running on port " + port);
});
