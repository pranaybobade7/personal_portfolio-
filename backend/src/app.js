import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
export const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
