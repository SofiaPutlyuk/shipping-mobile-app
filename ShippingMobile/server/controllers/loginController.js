const Account = require("../models/accountModel")
exports.loginUser = async (req, res) => {
    try {
        const { email } = req.body
        console.log(req.body);
        const user = await Account.findOne({ email })
        if (!user) return res.status(400).json({ message: "Користувача незнайдено" })
        res.json({ message: "Уcпішний пароль", user: { id: user._id, email: user.email } })
        console.log(req.body);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}