const { body } = require("express-validator");
const registerValidation = [
  body("fullName", "Имя должен быть минимум 3 символа").isLength({ min: 3 }),
  body("password", "Пароль должен быть минимум 6 символов").isLength({
    min: 6,
  }),
];
module.exports = registerValidation;