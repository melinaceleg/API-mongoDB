const { pushIntoArray } = require("../../helpers");
const Joi = require("joi");

const schema = Joi.object({
  locationId: Joi.string().required(),
});

const addUserLocation = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    const user = await pushIntoArray(
      "user",
      { _id: req.params.id },
      { locations: req.body.locationId }
    );
    return res.status(200).send({ status: 200, user });
  } catch (e) {
    res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = addUserLocation;
