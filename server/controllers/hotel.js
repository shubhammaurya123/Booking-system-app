import Hotel from "../models/Hotel.js";

export const addHotels = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const updateHotels = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(updateHotel);
  } catch (error) {
    next(error);
  }
};

export const DeleteHotels = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).send("Your Hotel is deleted");
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).send(hotel);
  } catch (error) {
    res.status(400).send("some error found in getHotel");
  }
};
//if we need only one hotel name
export const getAllHotels = async (req, res) => {
  try {
    const AllHotel = await Hotel.find();
    res.status(200).send(AllHotel);
  } catch (error) {
    res.status(400).send("some error found in getAllHotel");
  }
};
