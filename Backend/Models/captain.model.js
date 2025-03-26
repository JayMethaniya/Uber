const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type: String,
            required: true,
            minlength:[3, 'First name should be at least 3 characters']
        },
        lastName:{
            type: String,
            minlength:[3, 'Last name should be at least 3 characters']

        }   
    },
    email:{
        type: String,
        required: true,
        unique: true,
        localStorage: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        required: true,
        Select: false
    },
    socketID:{
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
        },
        plate : {
            type: String,
            required: true,
            minlength:[3, 'Plate should be at least 3 characters']
        },
       capacity:{
           type: Number,
           required: true,
           min: 1
       },
       vehicleType:{
           type: String,
           enum: ['car', 'auto', 'motorcycle'],
           required: true
       }
    },
    location : {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET , {expiresIn: '24h'}); 
    return token;
}
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
captainSchema.statics.userPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;  // Export the model to use it in other files