// getting-started.js
const mongoose = require("mongoose");

const mongoDB = async function main() {
  await mongoose.connect("mongodb://localhost:27017/modul_3");
  console.log("Code Aman cuy");
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
};

module.exports = mongoDB;
