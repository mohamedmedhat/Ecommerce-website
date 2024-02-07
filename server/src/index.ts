import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import { ProductsRouters } from "../src/routes/Products.route";
import { OrdersRouters } from "./routes/Orders.route";
import { SeedsRouters } from "./routes/Seeds.route";
import { UsersRouters } from "./routes/Users.route";
import { KeysRouters } from "./routes/Keys.route";
dotenv.config();

/** constants */
const app = express();
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/shopo";
const PORT: number = parseInt(process.env.PORT as string, 10);

/** middlewares  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../client/dist")));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

/** send the file */
app.get("*", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"))
);

/** routes  */
app.use("/api/v1/products", ProductsRouters);
app.use("/api/v1/orders", OrdersRouters);
app.use("/api/v1/seeds", SeedsRouters);
app.use("/api/v1/users", UsersRouters);
app.use("/api/v1/keys", KeysRouters);

/* connect to Mongodb */

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Db is connecting :)");
  })
  .catch((e) => {
    console.log(`error in db :( ${e}`);
  });

/** Run the server */
app.listen(PORT || 5000, () => {
  console.log(`Server is running on port ${PORT} :)`);
});
