const express = require("express");
const userController = require("../../controllers/user");
const { isAuthenticated } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Server is running");
});

router.post("/user/signup", userController.signUp);
router.post("/user/signin", userController.signIn);

router.get("/user", isAuthenticated, userController.getUser);

router.patch("/user", isAuthenticated, userController.updateUser);

router.patch("/user/password", isAuthenticated, userController.updatePassword);

router.post("/task", isAuthenticated, userController.updateTasks);

module.exports = router;
