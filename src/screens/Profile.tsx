import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthNavigatorRoutesProps } from "../routes/Auth.Routes";

export default function Profile() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleFoodScreen = () => {
    navigation.navigate("home");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFoodScreen}>
        <Text>profile!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
