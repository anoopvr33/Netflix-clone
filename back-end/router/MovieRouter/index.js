import express from "express";
import Movie from "../../db/Schemas/MovieSchema/index.js";
import CheckToken from "../../middleware/checkToken.js";

const router = express.Router();

router.post("/filter/name", async (req, res) => {
  const body = { ...req.body };
  console.log("haai", body.name);
  const moviedata = await Movie.find({ name: body.name });
  res.json(moviedata);
});

router.get("/getmovie", CheckToken(["ADMIN", "USER"]), async (req, res) => {
  const moviedata = await Movie.find();
  res.json(moviedata);
});

router.get("/getmovie/:id", async (req, res) => {
  const { id } = req.params;
  const moviedata = await Movie.findById(id);
  res.json(moviedata);
});

router.delete("/delete/:id", CheckToken(["ADMIN"]), async (req, res) => {
  const { id } = req.params;
  const data = await Movie.findByIdAndDelete(id);
  res.json(data);
});

router.patch("/update/:id", CheckToken(["ADMIN"]), async (req, res) => {
  const { id } = req.params;
  const body = { ...req.body };
  const updated = await Movie.findByIdAndUpdate(id, body);
  res.json({ true: updated });
});

router.post("/postmovie", CheckToken(["ADMIN"]), async (req, res) => {
  const body = { ...req.body };
  const moviedata = await Movie.create(body);
  res.json(moviedata);
});

export default router;
