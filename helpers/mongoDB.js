const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
function client() {
  const url = process.env.DB_URL;
  try {
    return new MongoClient(url, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  } catch (e) {
    return null;
  }
}

module.exports = client;
