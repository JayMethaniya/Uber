const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register', [
    body('fullName.firstName').isLength({min: 3}).withMessage('First name should be at least 3 characters'),
    body('fullName.lastName').isLength({min: 3}).withMessage('Last name should be at least 3 characters'),
    body('email').isEmail().withMessage('Please fill a valid email address'),
    body('password').isLength({min: 6}).withMessage('Password should be at least 6 characters')
], 
userController.registerUser
);
router.post('/login', [
    body('email').isEmail().withMessage('Please fill a valid email address'),
    body('password').isLength({min: 6}).withMessage('Password should be at least 6 characters')
],
userController.loginUser
);

router.get('/profile', authMiddleware.authUser, userController.getProfile);
router.get('/logout', authMiddleware.authUser, userController.logoutUser);

module.exports = router;