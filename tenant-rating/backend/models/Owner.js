import mongoose from 'mongoose';

// Define the Owner schema
const OwnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true/*, unique: true*/ },
  phone: { type: String },
  pan: { type: String},
  aadhar: {type: String},
  propertyMaintenance: { type: String, default: 'Good' }, // Property maintenance
  tenantFeedback: { type: String, default: 'Positive' }, // Tenant feedback
  overallRating: { type: Number, default: 0 }, // Overall rating
  createdAt: { type: Date, default: Date.now },
});

// Create the Owner model
const Owner = mongoose.model('Owner', OwnerSchema);

// Export the Owner model
export default Owner;