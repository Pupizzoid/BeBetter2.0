const jwt = require('jsonwebtoken');
const config = require('config');
const SECRET = config.get('jwtSecret');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { DbFacade } = require('../abstract/mongoDb');
const { handleError } = require('../utils');

const dbf = DbFacade.instance();

const handleAuthRegister = async (req, res) => {
  try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				message: 'Incorrect data',
			});
		}
		const { email, password } = req.body;
		const candidate = await dbf.users.findOne({ email });
		console.log(candidate);
    if (candidate) {
      return handleError({ message: `Such user already exists` }, res);
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await dbf.users.add({ ...req.body, password: hashedPassword });
    return res.status(200).json({ message: 'Profile created successfully' });
  } catch (e) {
    handleError(e, res, 500);
  }
};


module.exports = {
	handleAuthRegister,
}

