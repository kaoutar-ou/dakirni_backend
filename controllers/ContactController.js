const ContactService = require("../services/ContactService.js");

const addContact = async (req, res) => {
  const response = await ContactService.addContact(req, res);
  if (response?.errMsgs) return res.status(500).json(response);
  else return res.status(200).json(response);
};

const deleteContact = async (req, res) => {
  const response = await ContactService.deleteContact(req, res);
  if (response?.errMsgs) return res.status(500).json(response);
  else return res.status(200).json(response);
};

const updateContact = async (req, res) => {
  const response = await ContactService.updateContact(req, res);
  if (response?.errMsgs) return res.status(500).json(response);
  else return res.status(200).json(response);
};

const allContacts = async (req, res) => {
  const response = await ContactService.allContacts(req, res);
  if (response?.errMsgs) return res.status(500).json(response);
  else return res.status(200).json(response);
};

module.exports = {
  addContact,
  deleteContact,
  updateContact,
  allContacts
};