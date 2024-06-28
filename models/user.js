const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username can not be blank.']
    },
    password: {
        type: String,
        required: [true, 'Password can not be blank.']
    },
})

userSchema.statics.auth = async function (username, password) {
    const user = await this.findOne({ username });
    if (!user) {
        return false;
    }
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;