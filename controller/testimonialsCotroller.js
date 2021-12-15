import {Testimonial}  from "../model/Testimoniales.js";

const pageSaveTestimonials = async (req, res) => {

    const { name, email, message } = req.body;
    const msgErr = []
    // validate inputs 
    if (name.trim() === '' && email.trim() === '' && message.trim() === '') {
        msgErr.push({ textErr: 'Todos los campos son obligatorios' });
    } else {
        // Validate only field input[type=text]
        if (name.trim() === '') msgErr.push({textErr: 'El campo nombre esta vacio'})    

        // Validate only field input[type=email]
        if (email.trim() === '') msgErr.push({ textErr: 'El campo email esta vacio' })
        
        // Validate only field textArea
        if (message.trim() === '') msgErr.push({ textErr: 'El campo de mensaje esta vacio' })   
    }
    
    if (msgErr.length > 0) {
        const testimonials = await Testimonial.findAll()
        res.render('testimonios', {
            pagina: 'Testimonios',
            arrError: msgErr,
            testimonials,
            name,
            email,
            message
        })
    } else {
        try {
            await Testimonial.create({
                name,
                email,
                message
            });
            res.redirect('/testimonios');

        } catch (err) {
            console.log(err.sqlMessage)
        }
    }
}
export { 
    pageSaveTestimonials
}