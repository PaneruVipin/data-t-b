const unprocessable = require("../exceptions/unprocessable");
const client = require("../helpers/mongoDB");
const dbName = process.env.DB_NAME;
const getData = async (_, res) => {
  if (!client()) {
    unprocessable(res, "Internal server error *", 500);
  } else {
    try {
      await client().connect();
      const data = await client()
        .db(dbName)
        .collection("world")
        .find({})
        .toArray();
      res.json({
        data: data.map((d) => {
          delete d?._id;
          return d;
        }),
      });
    } catch (e) {
      unprocessable(res, "Internal server error #", 500);
    } finally {
      await client().close();
    }
  }
};

const updateData = async (req, res) => {
  if (!client()) {
    unprocessable(res, "Internal server error *", 500);
  } else {
    try {
      await client().connect();
      const data = req.body.data;
      const updateOperations = data.map(({ id, price }) => ({
        updateOne: { filter: { id }, update: { $set: { price } } },
      }));
      await client().db(dbName).collection("world").bulkWrite(updateOperations);
      res.json({ message: "sucessfully updated" });
    } catch (e) {
      unprocessable(res, "Internal server error #", 500);
    } finally {
      await client().close();
    }
  }
};
module.exports = { getData, updateData };
