export const getUser = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/account")
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}
export const postUser = async ({ firstName, lastName, age, email, password } , showWarning) => {
    if (password.length < 8) {
        showWarning("Пароль має містити 8 символів")
        return;
    }
    if (!firstName || !age || !email || !password) {
        showWarning("Заповніть поля")
        return
    }

    try {
        const response = await fetch("http://localhost:5000/api/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstName, lastName, age, email, password })
        })
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        showWarning("Error", error)
    }
}