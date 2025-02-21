const userModel = require("../models/user.model")

const getAllUsers = async(req, res)=>{
    const users = await userModel.find()
    res.json(users)
}

const getUserById = async(req,res)=>{
    const {id} = req.params

    const user = await userModel.findById(id)
    res.json(user)
}

const createUser = async(req, res)=>{
    // console.log(req.body)
    const user = await userModel.create(req.body)
    res.json(user)
}

const deleteUserById = async(req, res)=>{
    const {id} = req.params
    const user = await userModel.findByIdAndDelete(id)
    console.log(user)
    res.json(user)
}

const UpdateUserById = async(req, res)=>{
    const {id} = req.params
    const user = await userModel.findByIdAndUpdate(id, req.body)
    res.json(user)
}

module.exports = {getAllUsers, getUserById, createUser, deleteUserById, UpdateUserById}