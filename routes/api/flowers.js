const router = require("express").Router();
const flowersController = require("../../controllers/flowersController");

// Matches with "/api/flowers"
router.route("/")
  .get(flowersController.findAll)
  .post(flowersController.create);

// Matches with "/api/flowers/:id"
router
  .route("/:id")
  .get(flowersController.findById)
  .put(flowersController.update)
  .delete(flowersController.remove);

module.exports = router;
