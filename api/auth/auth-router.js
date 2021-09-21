const router = require("express").Router();
const {
  validateBody,
  validateType,
  checkUsernameFree,
  checkUsernameExists,
  validateCredentials,
  hashPassword,
  addUser,
  generateToken,
} = require("../middleware/middleware");

const registerMiddleware = [
  validateBody,
  validateType,
  checkUsernameFree,
  hashPassword,
  addUser,
];

router.post("/register", registerMiddleware, (req, res, next) => {
  res.status(201).json(req.newUser);
});

const loginMiddleware = [
  validateBody,
  validateType,
  checkUsernameExists,
  validateCredentials,
  generateToken,
];

router.post("/login", loginMiddleware, ({ user, token }, res, next) => {
  res.json({
    message: `Welcome back, ${user.username}!`,
    token,
    user: {
      id: user.id,
      username: user.username,
    },
  });
});

module.exports = router;
