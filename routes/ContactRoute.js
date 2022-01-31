import express from "express";
import {
  addContact,
  deleteContact,
  updateContact,
  allContacts,
} from "../controllers/ContactController.js";

const router = express.Router();
router.post("/addcontact", addContact);
router.post("/deletecontact", deleteContact);
router.post("/updatecontact", updateContact);
router.get("/allcontacts", allContacts);

export default router;
