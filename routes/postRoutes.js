import express from "express";

import { getAllPosts, createPost } from "../controllers/postController.js";

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);

export default router;
