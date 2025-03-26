const captainModel = require('../Models/captain.model');

module.exports.createCaptain = async (captainData) => {
    const { firstName, lastName, email, password, vehicle } = captainData;
    
    if (!firstName || !lastName || !email || !password || 
        !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicleType) {
        throw new Error('All fields are required');
    }

    const captain = new captainModel({
        fullName: {
            firstName,
            lastName
        },
        email,
        password,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        }
    });
    return await captain.save();
};
