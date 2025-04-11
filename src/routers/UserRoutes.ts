import { Router } from "express";
import { getUsers, create, update, deleta } from "../controllers/UserControllers";

const router = Router();
router.get("/users",getUsers);
router.post("/create", create);
router.put("/update/:id",update);
router.delete("/delete/:id",deleta);


export default router; 