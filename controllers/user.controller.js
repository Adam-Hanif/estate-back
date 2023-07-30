const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  getMe: async (req, res) => {
    const usertoken = req.headers.authorization;
    const token = usertoken.split(' ');
    const decoded = jwt.verify(token[1], process.env.SECRET_JWT_KEY);

    const user = await User.findById(decoded.id);

    res.json(user);
  },
  getUser: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json({ error: "Ошибка при  показе всех users" });
    }
  },
  addUser: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;
      const hashPassword = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({
        fullName,
        email,
        password: hashPassword,
        estate: req.params.id,
        favorites: req.params.id,
      });
      res.json(user);
    } catch (error) {
      res.json({ error: "Не удалость зарегистрироваться" });
    }
  },
  deleteUserById: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("Удалено");
    } catch (err) {
      res.json({ error: "Ошибка при удалении user" });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const condidate = await User.findOne({ email });
    if (!condidate) {
      return res.status(401).json({ error: "Неверный email" });
    }
    const valid = await bcrypt.compare(password, condidate.password);
    if (!valid) {
      return res.status(401).json({ error: "Неверный пароль" });
    }
    const payload = {
      id: condidate._id,
      email: condidate.email,
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });
    res.json({ token });
  },
};
