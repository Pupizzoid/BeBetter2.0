const jwt = require('jsonwebtoken');
const config = require('config');
const SECRET = config.get('jwtSecret');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ status: 'No authorization header found' });
  }
  const [, jwtToken] = authHeader.split(' ');
  try {
    req.user = jwt.verify(jwtToken, SECRET);
    next();
  } catch (e) {
    return res.status(200).json({ status: 'Invalid JWT' });
  }
};
