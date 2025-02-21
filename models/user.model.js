const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age:{
        type: Number
    },
})

module.exports = mongoose.model("user", userSchema)