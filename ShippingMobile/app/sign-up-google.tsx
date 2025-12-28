import * as Google from "expo-auth-session/providers/google"
import { useEffect } from "react"
import { Button } from "react-native"
export default function GoogleSignUp() {
    const [request , response , promptAsync] = Google.useAuthRequest({
        clientId:"598684789196-tjftnbk2ubm68c74qq1ej6cv5k315e0m.apps.googleusercontent.com",
        androidClientId:"598684789196-kjnqkqbrf1lurhgbk6rjr6vjjsdsr775.apps.googleusercontent.com",
        iosClientId:"598684789196-kjnqkqbrf1lurhgbk6rjr6vjjsdsr775.apps.googleusercontent.com",
    })
    useEffect(() => {
        if(response?.type === "success"  && response.authentication?.accessToken){
            const {authentication} = response
          fetchUser(authentication?.accessToken)
        }
    }, [response])
    const fetchUser = async(token: string) => {
    try{
     const response = await fetch("https://www.googleapis.com/userinfo/v2/me" , {
        headers:{
            Authorization:`Bearer ${token}`
        }
     })
     const user = await response.json()
     console.log("Google user" , user)
    } catch(error){
        console.log("Error" , error)
    }
    }
    return  <Button disabled={!request} title="Sign up with Google" onPress={() => promptAsync()} />;
}