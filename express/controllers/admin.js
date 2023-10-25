// This 'admin' controller prvides the logic that will be associated with admin related routes. when a route open what do we 
// to do with the req & res. We grab the 'model' info which handles how to process the data as a 'product'



const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title
  const price = req.body.price
  const imageUrl = req.body.imageUrl
  const desc = req.body.desc

  const product = new Product(title, imageUrl, desc, price)
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
