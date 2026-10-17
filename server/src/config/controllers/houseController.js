import House from "../models/House.js";

export const getHouses = async (req, res) => {
  try {
    const { location, type, maxRent } = req.query;
    const filter = { available: true };

    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    if (type) filter.type = type;

    if (maxRent !== undefined && maxRent !== "") {
      const rentLimit = Number(maxRent);

      if (!Number.isFinite(rentLimit) || rentLimit < 0) {
        return res.status(400).json({ message: "Invalid maximum rent" });
      }

      filter.rent = { $lte: rentLimit };
    }

    const houses = await House.find(filter)
      .populate("owner", "name")
      .sort({ createdAt: -1 });

    res.json({ houses });
  } catch {
    res.status(500).json({ message: "Could not fetch houses" });
  }
};

export const getHouseById = async (req, res) => {
  try {
    const house = await House.findById(req.params.id).populate("owner", "name");

    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }

    res.json({ house });
  } catch {
    res.status(400).json({ message: "Invalid house ID" });
  }
};

export const createHouse = async (req, res) => {
  try {
    const { title, description, location, rent, type, bedrooms, bathrooms, image } =
      req.body;

    if (!title || !description || !location || rent === undefined) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const numericRent = Number(rent);

    if (!Number.isFinite(numericRent) || numericRent < 0) {
      return res.status(400).json({ message: "Invalid rent amount" });
    }

    const house = await House.create({
      title,
      description,
      location,
      rent: numericRent,
      type,
      bedrooms,
      bathrooms,
      image,
      owner: req.user._id,
    });

    res.status(201).json({ house });
  } catch {
    res.status(400).json({ message: "Could not create house" });
  }
};

export const getMyHouses = async (req, res) => {
  try {
    const houses = await House.find({ owner: req.user._id }).sort({
      createdAt: -1,
    });

    res.json({ houses });
  } catch {
    res.status(500).json({ message: "Could not fetch your properties" });
  }
};

export const deleteHouse = async (req, res) => {
  try {
    const house = await House.findById(req.params.id);

    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }

    if (house.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await house.deleteOne();

    res.json({ message: "House deleted successfully" });
  } catch {
    res.status(400).json({ message: "Could not delete house" });
  }
};