import express from "express";
import userRoutes from "routes";

const app: express.Application = express();

const port: number = 3000;

// app.get("/", (_req, _res) => {
//     _res.send("TypeScript With Express");
// });

app.use("/user", userRoutes);

app.listen(port, () => {
    console.log("Server running on port " + port);
});
