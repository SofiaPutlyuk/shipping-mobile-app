const Account = require("../models/accountModel")
exports.getCurrentUser = async (req, res) => {
    const user = await Account.find()
    return res.status(200).json(user)
}
exports.createNewUser = async (req, res) => {
    const { firstName, lastName, age, email, password } = req.body
    const newUser = new Account({ firstName, lastName, age, email, password })
    await newUser.save()
    res.status(201).json(newUser)
}