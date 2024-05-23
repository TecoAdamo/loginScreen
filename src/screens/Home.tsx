import { useNavigation } from "@react-navigation/native";

import { ImageBackground, StatusBar, TextInput } from "react-native";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";

import { AuthNavigatorRoutesProps } from "../routes/Auth.Routes";

import { BlurView } from "expo-blur";

import BGLOGIN from "../assets/a86860784d8a9a962fcf15a650133319.jpg";

export default function Home() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleFoodScreen = () => {
    navigation.navigate("profile");
  };
  return (
    <ImageBackground source={BGLOGIN} style={styles.bg}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <BlurView
        intensity={100}
        tint="default"
        blurReductionFactor={10}
        style={styles.blurContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Insert your name:"
          placeholderTextColor="gray"
        />
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  blurContainer: {
    height: "30%",
    width: "60%",
    textAlign: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    padding: 6,
    marginLeft: "10%",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
});
