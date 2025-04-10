import { Router } from "express";
import { getUsers } from "../controllers/UserControllers";

const router = Router();
router.get("/users",getUsers);

export default router; 