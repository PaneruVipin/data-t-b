const unprocessable = (res, message, status, errors) => {
  res.status(status || 412).json({
    errors: errors || [{ message }],
  });
};

module.exports = unprocessable;
