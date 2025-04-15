import express from 'express';
import { getAllTenants, createTenant } from '../controllers/tenantControllers.js';

const router = express.Router();

router.get('/', getAllTenants);
router.post('/', createTenant);

export default router;