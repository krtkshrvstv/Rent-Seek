import Owner from '../models/Owner.js'; // Correct relative path

export const getAllOwners = async (req, res) => {
    try {
      const Owners = await Owner.find();
      res.json(Owners);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Create a new Owner
export const createOwner = async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  const owner = new Owner({
    name,
    email,
    phone,
    pan,
    aadhar,
    propertyMaintenance,
    tenantFeedback,
    overallRating,
  });

  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};