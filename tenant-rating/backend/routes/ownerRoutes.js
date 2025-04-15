import express from 'express';
import { getAllOwners, createOwner } from '../controllers/ownerControllers.js';

const router = express.Router();

router.get('/', getAllOwners);
router.post('/', createOwner);

export default router;