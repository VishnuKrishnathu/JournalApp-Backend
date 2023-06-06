import { Router } from "express";
import makeCallback from "helper/express-callback";
import { postUser } from "controllers";

const router = Router();

router.post("/create-user", makeCallback(postUser));

export default router;
