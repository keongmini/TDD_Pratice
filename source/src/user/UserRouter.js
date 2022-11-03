const express = require('express');

const UserService = require('./UserService');
const router = express.Router();

router.post('/api/1.0/users', async (req, res) => {
  await UserService.save(req.body);
  return res.send({ message: 'User created' });
});

module.exports = router;

// const user = Object.assign({}, req.body, { password: hash });
// const user = {
//   username: req.body.username,
//   email: req.body.email,
//   password: hash,
// };
