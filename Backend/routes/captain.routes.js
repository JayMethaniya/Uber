const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register', [
    body('fullName.firstName').isLength({min: 3}).withMessage('First name should be at least 3 characters'),
    body('fullName.lastName').isLength({min: 3}).withMessage('Last name should be at least 3 characters'),
    body('email').isEmail().withMessage('Please fill a valid email address'),
    body('password').isLength({min: 6}).withMessage('Password should be at least 6 characters'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color should be at least 3 characters'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate should be at least 3 characters'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity should be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'auto', 'motorcycle']).withMessage('Vehicle type should be car, auto or motorcycle'),
    body('vehicle').isObject().withMessage('Vehicle details are required'),
],captainController.registerCaptain);

router.post('/login', [
    body('email').isEmail().withMessage('Please fill a valid email address'),
    body('password').isLength({min: 6}).withMessage('Password should be at least 6 characters')
], captainController.loginCaptain);

router.get('/profile', authMiddleware.authCaptain,captainController.getProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;