const express = require("express")
const app = express()
const connectDb = require("./db/db")
const userRouter = require("./users/users.router")
const expenseRouter = require("./expenses/expense.router")


connectDb()

app.use(express.json())

app.use("/users", userRouter)
app.use("/expenses", expenseRouter)


app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(3000, ()=>{
    console.log("Running on http://localhost:3000")
})