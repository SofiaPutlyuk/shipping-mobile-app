import { Stack } from "expo-router";
export default function LayOut() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="start-shipping" />
    </Stack>
  )
}
