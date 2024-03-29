const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mailSchema = new Schema(
  {
    to: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Mail = mongoose.model("Mail", mailSchema);
module.exports = Mail;
