import express from "express";
import { pageInit, pageUs, pageTestimonials, pageTravels, pageTripDetails } from "../controller/pageControllers.js"

const router = express.Router();

router.get('/', pageInit);

router.get('/nosotros', pageUs);

router.get('/viajes', pageTravels);

router.get('/viajes/:id', pageTripDetails)

router.get('/testimonios', pageTestimonials);

export default router