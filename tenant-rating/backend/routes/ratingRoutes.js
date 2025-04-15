import express from 'express';
import { rateTenant, rateOwner } from '../controllers/ratingControllers.js';

const router = express.Router();

// Rate a tenant
router.post('/tenants/:tenantId/rate', rateTenant);

// Rate an owner
router.post('/owners/:ownerId/rate', rateOwner);

export default router;