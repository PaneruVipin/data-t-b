const { validation, schema } = require("common-coding-tools/validation");
const unprocessable = require("../exceptions/unprocessable");

const updateDataValidator = (req, res, next) => {
  const validationSchema = {
    data: `array: ${schema({
      id: " number | range: 0-9 | required",
      price: "required | number",
    })}`,
  };
  const data = validation(req.body, validationSchema);
  if (data?.errors) {
    const errors = data.errors;
    unprocessable(res, "", 412, errors);
  } else {
    const validatedData = data.data;
    req.body = validatedData;
    next();
  }
};

module.exports = updateDataValidator;
