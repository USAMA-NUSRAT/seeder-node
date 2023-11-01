const UserModel = require("./models/user.model");

const seedUsers = async () => {
  try {
    await UserModel.deleteOne({ name: "admin", email: "admin123@gmail.com" });

    const user = new UserModel({
      name: process.env.NAME,
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }
};

seedUsers();
