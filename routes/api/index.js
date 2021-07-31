const router = require("express").Router();
const flowerRoutes = require("./flowers");

// Book routes
router.use("/flowers", flowerRoutes);

module.exports = router;
