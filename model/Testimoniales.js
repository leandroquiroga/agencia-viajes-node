import Sequelize from "sequelize";
import db from "../config/database.js";

export const Testimonial = db.define('testimoniales', {
    name: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    email: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    message: {
        type: Sequelize.STRING,
        defaultValue: null
    },
});