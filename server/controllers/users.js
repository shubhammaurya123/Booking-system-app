import User from "../models/User.js";

export const updateUsers = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(updateUser);
  } catch (error) {
    next(error);
  }
};

export const DeleteUsers = async(req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Your User is deleted");
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const User = await User.findById(req.params.id);
    res.status(200).send(User);
  } catch (error) {
    next(error);
  }
};
//if we need only one User name
export const getAllUsers = async (req, res) => {
  try {
    const AllUser = await User.find();
    res.status(200).send(AllUser);
  } catch (error) {
    next(error);
  }
};
