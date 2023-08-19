const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb+srv://abhi41:abhi41@cluster0.fx20oom.mongodb.net/?retryWrites=true&w=majority');
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
    

  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
