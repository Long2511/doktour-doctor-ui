import * as React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {useState} from "react";
import {Color, FontSize} from "../GlobalStyle/GlobalStyles";

// @ts-ignore
const HomeScreen = ({navigation}) => {
  const [doctorName, setDoctorName] = useState("Dr. Tam");
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Text style={styles.welcomeText}>Welcome, {doctorName}</Text>
          <Image
            style={{
              width: "100%",
              height: 450,
              resizeMode: "contain",
            }}
            resizeMethod="scale"
            source={require("../assets/HospitalSOSBanner.png")}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("sosCaseScreen");
              }}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>My Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "D0D6EA",
  },
  imageContainer: {
    flex: 9,
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    paddingTop: "60%",
    flex: 1,
    alignItems: "flex-end",
  },
  buttonContainer: {
    width: "80%",
    height: 50,
    backgroundColor: "#20A4F3",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  buttonText: {color: Color.white, fontSize: 20},
  welcomeText: {
    alignSelf: "flex-start",
    paddingLeft: "10%",
    fontSize: FontSize.size_lg,
    paddingBottom: 10,
    color: Color.slategray_100,
    fontWeight: 500,
  },
});

export default HomeScreen;
