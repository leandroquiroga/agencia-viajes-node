import { Viajes } from '../model/Viajes.js';
import { Testimonial } from './../model/Testimoniales.js';

const pageInit = async (req, res) => {
    const promiseDataBase = [];

    promiseDataBase.push(Viajes.findAll({ where: { id: [1, 4, 7] } }));
    promiseDataBase.push(Testimonial.findAll({ where: { id: [4, 5, 6] } }));
    try {
        const result = await Promise.all(promiseDataBase)
        res.render('inicio', {
            pagina: 'Inicio',
            className: 'home',
            travelSelected: result[0],
            testimonialsIndex: result[1]
        });
    } catch (error) {
        console.log(error)
    }

};
const pageUs = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const pageTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.findAll()

        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonials
        });   
    } catch (error) {
        console.log(error)
    }
};

const pageTravels = async (req, res) => {
    const travels = await Viajes.findAll();
    res.render('viajes', {
        pagina: 'Viajes',
        result: travels
    })
};

const pageTripDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const detailsTravel = await Viajes.findOne({ where: { slug: id } });
        
        res.render('detalleViajes', {
            pagina: 'Informacion del Viajes',
            result: detailsTravel
        });
    } catch (error) {
        console.log(error)
    }
}


export { 
    pageInit,
    pageUs,
    pageTestimonials,
    pageTravels,
    pageTripDetails
}