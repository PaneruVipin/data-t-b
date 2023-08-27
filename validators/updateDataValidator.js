import { validation, schema } from "common-coding-tools/validation";

const updateDataValidator = (req, res, next) => {
  const validationSchema = {
    data: `array: ${schema({
      id: "required | number | range: 0-9 ",
      price: "required | number",
    })}`,
  };
  const data = validation(req.body, validationSchema);
  if (data?.errors) {
    const errors = data.errors;
    console.log(errors);
  } else {
    const validatedData = data.data;
    req.body = validatedData;
    next();
  }
};
