const { Router } = require('express');
// eslint-disable-next-line new-cap
const router = Router();
const { check } = require('express-validator');
const { handleAuthRegister } = require('../controllers/authController');


router.post('/auth/register',
    [
      check('email', 'Incorrect email').isEmail(),
      check('password', 'Password must be longer').isLength({ min: 6 }),
    ],

    handleAuthRegister);

// router.post('/auth/login',
//     [
//       check('email', 'Enter a correct email').normalizeEmail().isEmail(),
//       check('password', 'Enter a password').exists(),
//     ],
//     handleAuthLogin);

module.exports = router;

