import Admin from "../../db/Schemas/AdminSchema/index.js";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };

  const findEmail = await Admin.findOne({ email: body.email });

  if (findEmail) {
    return res.json({ message: "email already taken" });
  }

  const hashedpassword = await bcrypt.hash(body.password, 3);
  body.password = hashedpassword;

  const userData = await Admin.create(body);
  return res.status(200).json({ message: "successfully signup" });
});

router.post("/login", async (req, res) => {
  const body = { ...req.body };

  const userlog = await Admin.findOne({ email: body.email });

  if (!userlog) {
    return res.json({ message: "incorrect email or password" });
  }
  const isMatch = await bcrypt.compare(body.password, userlog.password);

  if (!isMatch) {
    return res.json({ message: "incorrect email or password" });
  }

  const token = jwt.sign(
    {
      id: userlog._id,
      email: userlog.email,
      role: "ADMIN",
    },
    process.env.SECRET_KEY,
    { expiresIn: "7d" }
  );

  return res.json({ message: "successfully login", token: token });
});

export default router;
