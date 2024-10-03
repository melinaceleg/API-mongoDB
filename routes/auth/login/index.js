const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET } = require("../../../config");
const { find } = require("../../../helpers");
const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")),
});


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    await schema.validateAsync(req.body);
    const populatedUser = await find(
      "user",
      { email }
    );

    const user = populatedUser?.[0];
    if (user) {
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        throw { message: 'Invalid Email or Password'}
      }
      user.password = undefined;
      const token = jwt.sign({ id: user._id }, SECRET);
      res.status(200).send({ status: 200, user, token });
    } else {
        throw { status: 404, message: "User does not exist" };
    }
  } catch (e) {
    res.status(e.status || 400).send({ status: e.status || 400, message: e.message });
  }
};

module.exports = loginUser;
