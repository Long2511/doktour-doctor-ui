import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Border, Color, FontSize} from "../GlobalStyle/GlobalStyles";
import {useNavigation} from "@react-navigation/native";
import * as React from "react";
import {useEffect} from "react";

const SOSCaseScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require("../assets/back.png")}
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
              marginLeft: Border.lg,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>SOS!</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.text}>
          There is an emergency case near you matched your specialization
        </Text>
        <Text style={[styles.text, styles.boldText, styles.paddingText]}>
          Description:
        </Text>
        <Text style={styles.text}>Male, 50, broken arm, drunken.</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OverviewAboutDoctor");
            }}>
            <Text style={styles.buttonText}>Take this case</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonContainer, styles.buttonContainerRed]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homeScreen");
            }}>
            <Text style={styles.buttonText}>Skip this case</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 10},
  headerContainer: {flex: 1.5, alignItems: 'center', justifyContent: 'center'},
  bodyContainer: {
    flex: 5.5,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Border.xlg,
    paddingHorizontal: Border.xlg,
  },
  bottomContainer: {flex: 2, marginTop: Border.lg},
  buttonContainer: {
    marginTop: Border.lg,
    width: "90%",
    height: 50,
    backgroundColor: "#20A4F3",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingBottom: Border.xsm,
  },
  buttonContainerRed: {
    backgroundColor: "#e5202c",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    marginTop: 5,
  },
  doctorTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    fontSize: FontSize.size_5xl * 1.5,
  },
  doctorCard: {
    marginTop: Border.xlg,
    flexDirection: "row",
    justifyContent: "center",
  },
  doctorTitleContainer: {
    paddingLeft: Border.xsm,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    alignSelf: "flex-start",
  },
  text: {
    fontSize: FontSize.size_lg,
    color: Color.slategray_100,
  },
  boldText: {
    fontWeight: "bold",
  },
  paddingText: {
    paddingTop: Border.xlg,
  },
});

export default SOSCaseScreen;
