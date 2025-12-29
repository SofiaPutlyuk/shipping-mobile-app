import * as Google from "expo-auth-session/providers/google"
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react"
WebBrowser.maybeCompleteAuthSession();
type GoogleSignUpProps = {
    onReady?: (promptAsync: () => Promise<any>, request: any) => void
}
export default function GoogleSignUp({ onReady }: GoogleSignUpProps) {
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: "598684789196-tjftnbk2ubm68c74qq1ej6cv5k315e0m.apps.googleusercontent.com",
        redirectUri: "https://auth.expo.io/@sophiaputlyuk@gmail.com/ShippingMobile",
    })
    useEffect(() => {
        if (response?.type === "success" && response.authentication?.accessToken) {
            const { authentication } = response
            fetchUser(authentication?.accessToken)
        }
    }, [response])
    const fetchUser = async (token: string) => {
        try {
            const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const user = await response.json()
            console.log("Google user", user)
        } catch (error) {
            console.log("Error", error)
        }
    }
    useEffect(() => {
        if (onReady) onReady(promptAsync, request)
    }, [promptAsync, request])
    return null;
}