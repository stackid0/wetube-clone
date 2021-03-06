import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import globalRouter from "./routers/global-router";
import userRouter from "./routers/user-router";
import videoRouter from "./routers/video-router";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;