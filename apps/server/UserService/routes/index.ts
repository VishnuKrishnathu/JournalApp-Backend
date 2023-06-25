import { Router } from "express";
import makeCallback from "../helper/express-callback";
import { postUser,  verifyUser } from "../controllers";

const router = Router();

router.post("/create-user", makeCallback(postUser));
router.post("/login", makeCallback(verifyUser));

export default router;
