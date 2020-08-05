import express, { response } from "express";
import ClassController from "./controllers/ClassesController";
import ConnetionController from "./controllers/ConnectionController";

const routes = express.Router();

const classesControllers = new ClassController();
const connectionController = new ConnetionController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionController.index);
routes.post("/connections", connectionController.create);

export default routes;
