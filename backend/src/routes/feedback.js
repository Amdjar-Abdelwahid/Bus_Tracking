const router = require("express").Router();
const controller = require("../controllers/feedbackController");
const { userAuth } = require("../middlewares/auth.middleware");

router.post("/createFeedback", userAuth, controller.createFeedback);
router.get("/getFeedbackByRoute/:routeId", controller.getFeedbackByRoute);
router.get("/getFeedbackByDriver/:driverId", controller.getFeedbackByDriver);
router.get("/getAllFeedbacks", controller.getAllFeedbacks);
router.delete("/deleteFeedback/:feedbackId", userAuth, controller.deleteFeedback);

module.exports = router; 