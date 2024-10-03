const mongoose = require("mongoose");
const schemaType = require("../../types");

const userTypeSchema = new mongoose.Schema(
  {
    type: {
      type: schemaType.TypeString,
      required: true,
    },
    status: {
      type: schemaType.TypeString,
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = userTypeSchema;
