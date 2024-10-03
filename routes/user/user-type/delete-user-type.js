const { deleteDocument } = require("../../../helpers");
const Joi = require("joi");

const deleteUserType = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteQuery = { _id: id };
    console.log(deleteQuery);
    const response = await deleteDocument("userType", deleteQuery);
    return res.status(200).send({ status: 200, response });
  } catch (e) {
    res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = deleteUserType;
