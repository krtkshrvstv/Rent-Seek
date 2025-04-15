import mongoose from 'mongoose';

// Define the tenant schema
const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true/*, unique: true*/ },
  phone: { type: String },
  pan: { type: String},
  aadhar: { type: String},
  cibilScore: { type: Number, default: 0 }, // CIBIL score
  rentalHistory: { type: String, default: 'Good' }, // Rental history
  incomeToRentRatio: { type: Number, default: 0 }, // Income-to-rent ratio
  overallRating: { type: Number, default: 0 }, // Overall rating
  createdAt: { type: Date, default: Date.now },
});

// Create the Tenant model
const Tenant = mongoose.model('Tenant', tenantSchema);

// Export the Tenant model
export default Tenant;