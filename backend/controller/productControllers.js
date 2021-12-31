const Product = require('../models/Product');

const dummyProducts = require('../data/products');

const seeder = async () => {
  const count = await Product.countDocuments();

  if (count) return;

  try {
    const products = await Product.create(dummyProducts);
    console.log(products);
  } catch (err) {
    console.log(err);
  }

  console.log(`Successfully Seeded Products`);
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  seeder,
};
