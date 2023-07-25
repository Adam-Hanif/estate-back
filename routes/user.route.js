const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const registerValidation = require("../validations/auth");
const handleValidationErrors = require("../validations/handleValidationErrors");
const authMiddleware = require("../middleware/auth.middleware");
const loginValidation = require("../validations/login");



const router = Router()
//--------------Регистрация------------------
router.post(
    "/auth",
    registerValidation,
    handleValidationErrors,
    userController.addUser
  );
//--------------ВХОД------------------
  router.post(
    "/login",
    loginValidation,
    handleValidationErrors,
    userController.login
  );

//--------------Удалиние User------------------  
  router.delete("/user/:id", authMiddleware, userController.deleteUserById);

  module.exports = router;