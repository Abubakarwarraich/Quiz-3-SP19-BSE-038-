require('dotenv').config();
const mongoose = require('mongoose');

const { seeder } = require('../controller/productControllers');

const connectDB = async () => {
  const URL = process.env.MONGO_URI || 'mongodb://localhost:27017/mernapp';
  try {
    await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connection SUCCESS');
    await seeder();
  } catch (error) {
    console.error('MongoDB connection FAIL');
    process.exit(1);
  }
};

module.exports = connectDB;
