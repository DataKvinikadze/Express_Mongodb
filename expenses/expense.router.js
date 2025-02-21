const {Router} = require("express")
const { getAllExpense, createExpense, deleteExpenseById, updateExpenseById, getExpenseById } = require("./expense.service")
const verifyUser = require("../middlewares/verifyUser")

const expenseRouter = Router()

expenseRouter.get("/", getAllExpense)
expenseRouter.post("/", createExpense)
expenseRouter.delete("/:id", verifyUser,deleteExpenseById)
expenseRouter.get("/:id", getExpenseById)
expenseRouter.put("/:id", updateExpenseById)

module.exports = expenseRouter