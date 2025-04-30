import { model, Schema } from "mongoose";
// import { type } from "os";

const AdminSchema = Schema({
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

const Admin = model("Admin", AdminSchema);

export default Admin;
