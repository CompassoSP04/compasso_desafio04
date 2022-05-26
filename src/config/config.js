const dotenv = require('dotenv')

dotenv.config({
    path: process.env.NODE_ENV,
})

module.exports = {
    database: {
        host: procces.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: procces.env.DB_PASS,
        collection: procces.env.DB_COLLECTION,
    }
}