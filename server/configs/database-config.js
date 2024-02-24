const { db } = require("./server-config");
const mongoose = require("mongoose");

async function connectToDatabase() {
  const uri = db.uri;
  await mongoose.connect(uri);
  console.log("Connected to database at " + uri);
}

module.exports = {
  connectToDatabase,
};
