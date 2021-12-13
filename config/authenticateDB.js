import database from './database.js';


const authenticateDB = async () => {
    try {
        await database.authenticate();
        console.log('Connect with Database')
    } catch (error) {
        console.log('Undable connect with Databse: ', error)
    }
}

export default authenticateDB;