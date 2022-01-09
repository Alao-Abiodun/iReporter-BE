import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {},
});

const User = mongoose.model("User", userSchema);

export default User;
