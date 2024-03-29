const express = require("express");
const {
  authUser,
  registerUser,
  updateUserProfile,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddlewares");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
