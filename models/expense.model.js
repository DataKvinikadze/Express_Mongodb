const { default: mongoose } = require("mongoose");

const expenseSchema = mongoose.Schema({
    title: {
        type: String
    },
    amount: {
        type: Number
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model("expense", expenseSchema)