const ProductController = require("../controllers/Productcontroller");
const router = require("express").Router();

router.post("/addproduct", ProductController.addProduct);
router.get("/allproducts", ProductController.getAllProducts);
router.get("/published", ProductController.getPublishedProduct);

router.get("/:id", ProductController.getOneProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
