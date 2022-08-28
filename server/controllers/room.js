import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res) => {
  const HotelID = req.params.hotelId;
  
  const newRoom = new Room(req.body);
  try {
    const saveRoom = await newRoom.save();
    
    try {
      // phalye hotel id se hotel ko find kr ke usmye saveRoom ke id ke push kr detye hai
      await Hotel.findByIdAndUpdate(HotelID, {
        $push: { rooms: saveRoom._id },
      });
    } catch (err) {
        console.log(err);
      res.status(400).send("hotelId is not valid1");
    }
    res.status(200).send(saveRoom);
  } catch (err) {
    console.log(err)
    res.status(400).send("hotelId is not valid2");
  }
};

export const updateRoom = async (req, res) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(updateRoom);
  } catch (error) {
     res.status(400).send("somthing is wrong in udateroomfunction")
  }
};

export const DeleteRoom = async (req, res) => {
  try {
    const HotelID = req.params.hotelID;
    // phalye hotel id se hotel ko find kr ke usmye saveRoom ke id ke push kr detye hai
    await Hotel.findByIdAndUpdate(HotelID, {
        $pull: { rooms: req.params.id },
      });
      res.status(200).send("Room is deleted")
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).send(room);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//if we need only one hotel name
export const getAllRoom = async (req, res) => {
  try {
    const AllRooms = await Room.find();
    res.status(200).send(AllRooms);
  } catch (error) {
    next(error);
  }
};
