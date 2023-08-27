const unprocessable = (res, message, status = 412) => {
  res.status(status).json({
    errors: [{ message }],
  });
};

module.exports = unprocessable;
