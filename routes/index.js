import express from "express";
import { pageInit, pageUs, pageTestimonials, pageTravels } from "../controller/pageControllers.js"


const router = express.Router();

router.get('/', pageInit);

router.get('/nosotros', pageUs);

router.get('/testimonios', pageTestimonials);

router.get('/viajes', pageTravels);

export default router