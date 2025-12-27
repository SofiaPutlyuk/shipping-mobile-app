export const getUser = async () => {
    try {
        const response = await fetch("http://localhost:6000/api/account")
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}
export const postUser = async ({ firstName, lastName, age, email, password }) => {
    if (password.length > 8) {
        console.log("Пароль має містити 8 символів")
        return;
    }
    if (!firstName || !age || !email || !password) {
        console.log("Заповніть поля")
        return
    }

    try {
        const response = await fetch("http://localhost:6000/api/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstName, lastName, age, email, password })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}