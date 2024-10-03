const mongoose = require("mongoose");
const schemaType = require("../../types");

const locationSchema = new mongoose.Schema(
  {
    city: {
      type: schemaType.TypeString,
      required: true,
    },
    country: {
      type: schemaType.TypeString,
      required: true,
    }
  },
  { timestamps: false }
);

module.exports = locationSchema;
