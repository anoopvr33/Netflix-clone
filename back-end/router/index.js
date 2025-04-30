import express from "express";
import UserRouter from "./UserRouter/index.js";
// import ProductRouter from "./ProductRouter/index.js";
import ImageRouter from "./ImageRouter/index.js";
import MovieRouter from "./MovieRouter/index.js";
import AdminRouter from "./AdminRouter/index.js";

const router = express.Router();

router.use("/user", UserRouter);
// router.use("/product", ProductRouter);
router.use("/upload", ImageRouter);
router.use("/movie", MovieRouter);
router.use("/admin", AdminRouter);

export default router;
