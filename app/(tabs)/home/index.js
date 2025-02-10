import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function HomeIndex() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />
      <Text>Index of home page.</Text>
      <Link href={"/(tabs)/home"}><Text style={{fontWeight:"bold"}}>Go to home page.</Text></Link>
    </View>
  );
}
