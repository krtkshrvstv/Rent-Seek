import Tenant from '../models/Tenant.js';
import Owner from '../models/Owner.js';

// Rate a tenant
export const rateTenant = async (req, res) => {
  const { tenantId, cibilScore, rentalHistory, incomeToRentRatio } = req.body;

  try {
    const tenant = await Tenant.findById(tenantId);
    if (!tenant) {
      return res.status(404).json({ message: 'Tenant not found' });
    }

    // Calculate overall rating (example formula)
    const overallRating = (cibilScore * 0.5) + (rentalHistory === 'Good' ? 30 : 0) + (incomeToRentRatio * 0.2);

    // Update tenant's ratings
    tenant.cibilScore = cibilScore;
    tenant.rentalHistory = rentalHistory;
    tenant.incomeToRentRatio = incomeToRentRatio;
    tenant.overallRating = overallRating;

    await tenant.save();
    res.status(200).json(tenant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Rate an owner
export const rateOwner = async (req, res) => {
  const { ownerId, propertyMaintenance, tenantFeedback } = req.body;

  try {
    const owner = await Owner.findById(ownerId);
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }

    // Calculate overall rating (example formula)
    const overallRating = (propertyMaintenance === 'Good' ? 70 : 30) + (tenantFeedback === 'Positive' ? 30 : 0);

    // Update owner's ratings
    owner.propertyMaintenance = propertyMaintenance;
    owner.tenantFeedback = tenantFeedback;
    owner.overallRating = overallRating;

    await owner.save();
    res.status(200).json(owner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};