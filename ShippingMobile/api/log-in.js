export const logIn = async ({ email, password }) => {
    if (!email || !password) {
        console.log("Заповніть поля")
        return
    }
    try {
        const response = await fetch("http://localhost:5000/api/account/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            const error = await response.json()
            alert(error.message)
            return
        }
        const data = await response.json()
        alert("Ви успішно залогінені")
        return data
    } catch (error) {
        console.log("Error", error.message)
    }
}