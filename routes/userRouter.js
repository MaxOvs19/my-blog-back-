import { Router } from "express";
import userController from "../controllers/userController.js";

const router = new Router();

router.post("/login", userController.login);
router.post("/registration", userController.registration);

router.get("/auth", userController.check);

export default router;