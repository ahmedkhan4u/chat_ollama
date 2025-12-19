import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/app.routes.js";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(
    express.json({
        limit: "16kb",
    })
);


app.use(
    express.urlencoded({
        extended: true,
        limit: "16k",
    })
);



app.use("/", router);



app.use(morgan("dev"))

export default app;
