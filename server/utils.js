const handleError = (err, res, errCode = 400) => {
  return res.status(errCode).json({ message: err.message });
};

module.exports = {
	handleError
}
