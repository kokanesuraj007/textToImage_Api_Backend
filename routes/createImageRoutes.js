import express from "express";

import {
  getCreateImage,
  postCreateImage,
} from "../controllers/createImageController.js";

const router = express.Router();

router.route("/").get(getCreateImage).post(postCreateImage);

export default router;
