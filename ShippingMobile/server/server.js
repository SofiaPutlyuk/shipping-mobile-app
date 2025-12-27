const express = require("express")
const app = express()
const routerAccount = require("./routes/accountRouter")
const connectDB = require("./db")
const PORT = 6000
connectDB()
app.use(express.json())
app.use("/api/account" , routerAccount)
app.listen(PORT , () => {
    console.log(`Сторінку знайдено ${PORT}`)
})