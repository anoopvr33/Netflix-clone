import { model, Schema } from "mongoose";
// import { type } from "os";

const MovieSchema = Schema({
  name: {
    type: String,
  },
  cast: {
    type: String,
  },
  duration: {
    type: String,
  },
  year: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Movie = model("Movie", MovieSchema);

export default Movie;
