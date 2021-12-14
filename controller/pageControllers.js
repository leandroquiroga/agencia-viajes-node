import { Viajes } from '../model/Viajes.js';

const pageInit = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
};
const pageUs = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const pageTestimonials = (req, res) => {
    res.render('testimonios', {
        pagina: 'Testimonios'
    });
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