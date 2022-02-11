const express = require("express");
const {
  addContact,
  deleteContact,
  updateContact,
  allContacts,
} = require("../controllers/ContactController.js");

const router = express.Router();
router.post("/addcontact", addContact);
router.post("/deletecontact", deleteContact);
router.post("/updatecontact", updateContact);
router.get("/allcontacts", allContacts);

module.exports = router;
