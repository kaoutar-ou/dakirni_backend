import contactModel from "../models/Contact.js";

export const addContact = async (req, res) => {
  var response = {
    errMsgs: {},
    data: {},
  };
  console.log("contact add");
  var newContact = req.body;
  // console.log("req : "+req.body);
  // console.log("req 2 : "+JSON.stringify(req.body));
  if (newContact != null) {
    try {
      var contact = new contactModel({
        contact_id: newContact.contact_id,
        contact_name: newContact.contact_name,
        contact_number: newContact.contact_number,
        contact_image: newContact.contact_image,
      });
      if (contact.save()) {
        response = {
          ...response,
          data: {
            ...response.data,
            success: "Contact added successfully !",
          },
        };
      } else {
        response = {
          ...response,
          errMsgs: {
            ...response.errMsgs,
            err: "Error : Database Error !",
          },
        };
      }
    } catch (err) {
      // console.log(err);
      response = {
        ...response,
        errMsgs: {
          ...response.errMsgs,
          err: "Error : Server Error !",
        },
      };
    }
  } else {
    // console.log(err);
    response = {
      ...response,
      errMsgs: {
        ...errMsgs,
        err: "Error : Undefined New Contact !",
      },
    };
  }

  return response;
};

export const deleteContact = async (req, res) => {
  var response = {
    errMsgs: {},
    data: {},
  };
  console.log("contact delete");
  const deletedContact = req.body;
  const contactId = deletedContact.contact_id;
  const contact = await contactModel.findOne({'contact_id': contactId});
  contactModel.findByIdAndDelete(contact._id, (err, doc) => {
    if (err) {
      console.log(err);
      response = {
        ...response,
        errMsgs: {
          ...response.errMsgs,
          err: "Error : can't delete contact !",
        },
      };
    }
  });
  response = {
    ...response,
    data: {
      ...response.data,
      success: "Contact deleted successfully !",
    },
  };
  return response;
};

export const updateContact = async (req, res) => {
  var response = {
    errMsgs: {},
    data: {},
  };
  console.log("contact update");
  // const contactId = req.body.contactId;
  const updatedContact = req.body;
  const contactId = updatedContact.contact_id;

  if (updatedContact != null) {
    try {
      // const contact = await contactModel.findById(
      //   mongoose.Types.ObjectId(contactId)
      // );
      const contact = await contactModel.findOne({'contact_id': contactId});
      console.log("contact name = " + contact.contact_name);
      console.log("updated contact name = " + updatedContact.contact_name);
      // contact = updatedContact;
      contact.contact_name = updatedContact.contact_name;
      contact.contact_number = updatedContact.contact_number;
      contact.contact_image = updatedContact.contact_image;
      console.log("updated name = " + contact.contact_name);
      if (contact.save()) {
        response = {
          ...response,
          data: {
            ...response.data,
            success: "Contact updated successfully !",
          },
        };
      } else {
        response = {
          ...response,
          errMsgs: {
            ...response.errMsgs,
            err: "Error : Database Error !",
          },
        };
      }
    } catch (err) {
      // console.log(err);
      response = {
        ...response,
        errMsgs: {
          ...response.errMsgs,
          err: "Error : Server Error !",
        },
      };
    }
  } else {
    console.log(err);
    response = {
      ...response,
      errMsgs: {
        ...response.errMsgs,
        err: "Error : Undefined Updated Contact !",
      },
    };
  }
  return response;
};

export const allContacts = async (req, res) => {
  var response = {
    errMsgs: {},
    data: {},
  };
  // parentId = req.body.parentId;
  // const contacts = await contactModel.findById(mongoose.Types.ObjectId(parentId));
  const contacts = await contactModel.find();
  response = contacts;
  return response;
};
