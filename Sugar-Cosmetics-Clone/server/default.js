
// ./default.js

const { Product } = require('./model/products-schema');
const { products } = require('./constants/data');

const defaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log('Data imported successfully');
    } catch (error) {
        console.log('Error while inserting default data', error.message);
    }
};

module.exports = defaultData; // Export the function directly


