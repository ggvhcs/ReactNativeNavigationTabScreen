import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function SettingIndex() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Setting" }} />
      <Text>Index of setting page.</Text>
      <Link href={"/(tabs)/home"}><Text style={{fontWeight:"bold"}}>Go to home page.</Text></Link>
    </View>
  );
}
