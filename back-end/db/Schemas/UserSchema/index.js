import { model, Schema } from "mongoose";
// import { type } from "os";

const UserSchema = Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = model("User", UserSchema);

export default User;
