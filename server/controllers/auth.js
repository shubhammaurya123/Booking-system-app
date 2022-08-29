import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//time 48:00
export const register = async (req, res) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      isAdmin: req.body.isAdmin,
    });
    await newUser.save();
    res.status(200).send("user is created");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("plese enter write email");
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(200).send("your password is wrong");
    }
    const { password, isAdmin, ...otherDetails } = user._doc;
    const token = await jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.TOKEN_KEY
    );
    res
      .cookie("access_token", token, { httpOnly: true }) // use httpOnly because it is more secure now
      .status(200)
      .send(otherDetails);
  } catch (error) {
    console.log("hi login");
    console.log(error);
  }
};
