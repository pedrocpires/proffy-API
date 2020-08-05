import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 8080;

app.listen(port, () => {
  console.log("Listen on Port { :" + port + " }");
});
