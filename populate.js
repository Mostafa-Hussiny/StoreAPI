require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')
const jsonProducts = require('./products.json')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();     // clear all the collection
        await Product.create(jsonProducts)
        console.log("population success!");
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


start()