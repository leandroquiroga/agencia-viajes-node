import express from 'express';
import authenticateDB from './config/authenticateDB.js';
import router from './routes/index.js';
import donenv from 'dotenv'

// variables enverioment
donenv.config({ path: 'variable.env' });

const app = express();
// Connecting DB
authenticateDB();

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


// configurate PORT and HOST 
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

app.listen(port, host,  () => {
    console.log(`Servidor OK!`)
})
