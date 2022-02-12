const contactModel = require("../models/Contact.js");

const allSons = async (req, res) => {
  console.log("all sons");
  var response = {
    errMsgs: {},
    data: {},
  };
  // parentId = req.body.parentId;
  // const contacts = await contactModel.findById(mongoose.Types.ObjectId(parentId));
  const sons = await contactModel.find();
  response = sons;
  console.log(response);
  return response;
};

module.exports = {allSons};