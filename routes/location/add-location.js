const { insertNewDocument } = require("../../helpers");
const Joi = require("joi");

const schema = Joi.object({
  city: Joi.string().required(),
  country: Joi.string().required(),
});

const addLocation = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    const location = await insertNewDocument("location", req.body);
    return res.status(200).send({ status: 200, location });
  } catch (e) {
    res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = addLocation;
