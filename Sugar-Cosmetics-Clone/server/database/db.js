const mongoose = require('mongoose');

const connection = async () => {
  const URL =
    'mongodb+srv://danish733:danish321@cluster0.2yi1hwt.mongodb.net/shopping?retryWrites=true&w=majority';
  
  try {
    await mongoose.connect(URL);
  console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting to the database:', error.message);
  }
};

module.exports = connection;
