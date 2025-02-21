const { default: mongoose } = require("mongoose")
require("dotenv").config()

module.exports = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connected Successfully!")
    } catch (e) {
        console.log(e)
    }
}