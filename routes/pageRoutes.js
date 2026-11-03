import { Router } from "express";
import {
  getAbout,
  getContact,
  getHome,
  getIndex
} from "../controllers/pageController.js";

const router = Router();

router.get("/", getIndex);
router.get("/api/home", getHome);
router.get("/api/about", getAbout);
router.get("/api/contact", getContact);

export default router;
