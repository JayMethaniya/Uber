const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
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
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET , {expiresIn: '24h'});
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
userSchema.statics.userPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const User = mongoose.model('User', userSchema);
module.exports = User;