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

const pageTravels = (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
    })
}

export { 
    pageInit,
    pageUs,
    pageTestimonials,
    pageTravels
}