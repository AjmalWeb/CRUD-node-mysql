const db = require("../models");

const Products = db.products;
const Review = db.reviews;

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Products.create(info);
  res.status(200).send(product);
};

const getAllProducts = async (req, res) => {
  let products = await Products.findAll({
    // attributes: ["title", "price"],
  });
  //   let count = products.length;
  res.status(200).send({ count: products.length, products });
};

const getOneProduct = async (req, res) => {
  let productid = req.params.id;
  let product = await Products.findOne({ where: { id: productid } });
  res.status(200).send(product);
};

const updateProduct = async (req, res) => {
  let productid = req.params.id;

  const product = await Products.update(req.body, { where: { id: productid } });
  res.status(200).send(product);
};

const deleteProduct = async (req, res) => {
  let productid = req.params.id;
  await Products.destroy({ where: { id: productid } });
  res.status(200).send("product is deleted");
};

const getPublishedProduct = async (req, res) => {
  const products = await Products.findAll({ where: { published: true } });
  res.status(200).send({ count: products.length, products });
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
};
