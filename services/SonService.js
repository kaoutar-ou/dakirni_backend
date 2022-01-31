import contactModel from "../models/Contact.js";

export const allSons = async (req, res) => {
  var response = {
    errMsgs: {},
    data: {},
  };
  // parentId = req.body.parentId;
  // const contacts = await contactModel.findById(mongoose.Types.ObjectId(parentId));
  const sons = await contactModel.find();
  response = sons;
  return response;
};
