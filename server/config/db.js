// const mongoose = require("mongoose");
// try {
//   mongoose.connect("mongodb://mongo:27017/Ecommerce", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   });
//   console.log("Database Connected Successfully");
// } catch (err) {
//   console.log("Database Not Connected");
// }


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://mongo:27017/Ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex is no longer needed in Mongoose 6+
    });
    console.log("Database Connected Successfully");
  } catch (err) {
    console.error("Database Not Connected");
    console.error(err); // Show the actual error
    process.exit(1); // Optional: exit process if DB connection fails
  }
};

module.exports = connectDB;
