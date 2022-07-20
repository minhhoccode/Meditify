const router = require("express").Router();
import { Request, Response } from "express";
const ImageCover = require("../models/ImageCover");


// create image
router.post("/", async (req: Request, res: Response) => {
  const newImageC = new ImageCover(req.body);
  try {
    const savedImageC = await newImageC.save();
    return res.status(200).json(savedImageC);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// update image
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const imageC = await ImageCover.findById(req.params.id);
    if (imageC.username === req.body.username) {
      try {
        const updatedImageC = await ImageCover.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).json(updatedImageC);
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res
        .status(401)
        .json("Bạn chỉ được quyền cập nhật bài viết của chính mình :Đ");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
})

module.exports = router;
