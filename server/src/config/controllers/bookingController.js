import Booking from "../models/Booking.js";
import House from "../models/House.js";

export const createBooking = async (req, res) => {
  try {
    const { houseId, startDate, endDate } = req.body;

    if (!houseId || !startDate || !endDate) {
      return res.status(400).json({ message: "All booking fields are required" });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (
      Number.isNaN(start.getTime()) ||
      Number.isNaN(end.getTime()) ||
      start >= end
    ) {
      return res.status(400).json({ message: "Invalid booking dates" });
    }

    const house = await House.findById(houseId);

    if (!house || !house.available) {
      return res.status(404).json({ message: "House is not available" });
    }

    if (house.owner.toString() === req.user._id.toString()) {
      return res.status(400).json({ message: "You cannot book your own house" });
    }

    const booking = await Booking.create({
      house: house._id,
      tenant: req.user._id,
      startDate: start,
      endDate: end,
    });

    res.status(201).json({ booking });
  } catch {
    res.status(400).json({ message: "Could not create booking" });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ tenant: req.user._id })
      .populate("house")
      .sort({ createdAt: -1 });

    res.json({ bookings });
  } catch {
    res.status(500).json({ message: "Could not fetch bookings" });
  }
};