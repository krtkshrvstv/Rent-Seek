import Tenant from '../models/Tenant.js'; // Correct relative path

export const getAllTenants = async (req, res) => {
    try {
      const tenants = await Tenant.find();
      res.json(tenants);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Create a new tenant
export const createTenant = async (req, res) => {
  const { name, email, phone, pan, aadhar } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  const tenant = new Tenant({
    name,
    email,
    phone,
    pan,
    aadhar,
    cibilScore,
    rentalHistory,
    incomeToRentRatio,
    overallRating,
  });

  try {
    const newTenant = await tenant.save();
    res.status(201).json(newTenant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};