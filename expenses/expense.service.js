const expenseModel = require("../models/expense.model")

const getAllExpense = async(req, res)=>{
    const expense = await expenseModel.find()
    res.json(expense)
}

const getExpenseById = async(req, res)=>{
    const {id} = req.params
    const expense = await expenseModel.findById(id)
    res.json(expense)
}

const deleteExpenseById = async(req, res)=>{
    const {id}= req.params
    const user = await expenseModel.findByIdAndDelete(id)
    res.json(user)
}

const createExpense = async(req,res)=>{
    const expense = await expenseModel.create(req.body)
    res.json(expense)
}

const updateExpenseById = async(req,res)=>{
    const {id}= req.params
    const expense = await expenseModel.findByIdAndUpdate(id,req.body)
    res.json(expense)
}

module.exports ={getAllExpense, getExpenseById, deleteExpenseById, createExpense, updateExpenseById}