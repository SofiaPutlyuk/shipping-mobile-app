const Account = require("../models/accountModel")
exports.getCurrentUser = async (req, res) => {
    try {
        const user = await Account.find()
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: "Помилка сервера" })
    }
}
exports.createNewUser = async (req, res) => {
    const { firstName, lastName, age, email, password } = req.body
    const newUser = new Account({ firstName, lastName, age, email, password })
    await newUser.save()
    res.status(201).json(newUser)
}