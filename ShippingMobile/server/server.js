const express = require("express")
const app = express()
const routerAccount = require("./routes/accountRouter")
const connectDB = require("./db")
const cors = require("cors")
const PORT = 5000
connectDB()
app.use(cors({
    origin: "http://localhost:8081",
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true 
}));
app.use(express.json())
app.use("/api/account" , routerAccount)
app.listen(PORT , () => {
    console.log(`Сторінку знайдено ${PORT}`)
})