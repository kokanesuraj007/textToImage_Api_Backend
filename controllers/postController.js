import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../models/postModel.js";

dotenv.config();

// CLOUDINARY CONFIGURATION
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({ status: "success", data: posts });
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

const createPost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    // CLOUDINARY UPLOAD
    const uploadedImage = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: uploadedImage.url,
    });

    res.status(201).json({ status: "success", data: newPost });
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

export { getAllPosts, createPost };
