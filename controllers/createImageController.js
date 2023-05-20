import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const postCreateImage = async (req, res) => {
  try {
    const aiResponse = await openai.createImage({
      prompt: req.body.prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    res.status(500).send(error?.response.data.error.message);
  }
};

const getCreateImage = (req, res) => {
  res.send("Hello from OpenAI!");
};

export { getCreateImage, postCreateImage };
