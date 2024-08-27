import mongoose from "mongoose";
import { env } from "./env";

export async function mongooseConnect() {
  mongoose
    .connect(env.MONGO_URI)
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.log(err));
}