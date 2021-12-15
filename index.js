import express from 'express';
import authenticateDB from './config/authenticateDB.js';
import router from './routes/index.js';


const app = express();
// Connecting DB
authenticateDB();

// Port 
const port = process.env.PORT || 4000;

// Body Parser
app.use(express.urlencoded({extended:true}))
// Pug
app.set('view engine', 'pug');

// Static files
app.use(express.static('public'));

// Date === Year Currently
app.use((req, res, next) => {
    const data = new Date()
    res.locals.yearCurrently = data.getFullYear();
    res.locals.sitio = "Agencia de Viajes";
    // force next
    return next()
});

// Router
app.use('/', router);

app.listen(port, () => {
    console.log(`Listenning port: http://www.localhost:${port}`)
})
