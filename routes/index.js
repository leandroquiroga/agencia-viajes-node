import express from "express";
import { pageInit, pageUs, pageTestimonials, pageTravels, pageTripDetails } from "../controller/pageControllers.js"
import { pageSaveTestimonials } from "../controller/testimonialsCotroller.js"
const router = express.Router();

router.get('/', pageInit);

router.get('/nosotros', pageUs);

router.get('/viajes', pageTravels);

router.get('/viajes/:id', pageTripDetails)

router.get('/testimonios', pageTestimonials);

router.post('/testimonios', pageSaveTestimonials);

export default router