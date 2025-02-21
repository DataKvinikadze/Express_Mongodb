const {Router} = require("express")
const { getAllUsers, getUserById, createUser, deleteUserById, UpdateUserById } = require("./users.service")

const userRouter = Router()

userRouter.get("/", getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/", createUser)
userRouter.delete("/:id", deleteUserById)
userRouter.put("/:id", UpdateUserById)

module.exports = userRouter