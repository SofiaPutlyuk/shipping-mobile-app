const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Account", {
            family: 4
        })
        console.log("Mongoose is connected")
    } catch (error) {
        console.log("Error", error)
        process.exit(1)
    }
}
module.exports = connectDB