const captainModel = require('../Models/captain.model');


module.exports.createCaptain = async ({
    fullName,email,password,color,plate,capacity,vehicleType
}) => {
    if(!fullName || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }
    const captain = new captainModel({
        fullName : {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return captain
}
