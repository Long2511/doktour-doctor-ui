import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import {Border, Color, FontSize} from "../GlobalStyle/GlobalStyles";

const PatientOverviewScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.patientVitalContainer}>
        <Text>Patient's vital placeholder</Text>
      </View>
      <View style={styles.hospitalDock}>
        <View style={styles.hospitalLocation}>
          <Text
            style={{
              color: Color.slategray_100,
              fontSize: FontSize.uI16Semi_size,
            }}>
            To Cho Ray Hospital
          </Text>
        </View>
        <View style={styles.PatientInformationContainer}>
          <View style={{flexDirection: 'row', height: 60}}>
            <Image
              style={{height: 70, width: 70}}
              source={require("../assets/doctor-images/20ce3cd5-55b4-424c-a46a-1555bf625dbc.png")}
            />
            <View style={{paddingLeft: Border.xsm, justifyContent: 'center'}}>
              <Text
                style={{
                  color: Color.slategray_100,
                  fontSize: FontSize.uI16Semi_size,
                }}>
                Doctor Tam
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: Color.slategray_100,
                  fontSize: FontSize.uI16Semi_size,
                }}>
                Obstetrician
              </Text>
            </View>
          </View>
          <View style={styles.caseId}>
            <Text style={{padding: 5, fontSize: FontSize.size_sm}}>
              Case ID: rc8mn
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
          <Text style={styles.distantText}>Distance: 7.5 km</Text>
          <Text style={styles.distantText}>Travel Time: 15 mins</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ContactHospitalScreen");
              }}>
              <Text style={styles.buttonText}>Contact Hospital</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  patientVitalContainer: {
    flex: 6,
  },
  hospitalDock: {
    backgroundColor: Color.aliceblue,
    flex: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  hospitalLocation: {
    paddingLeft: "5%",
    paddingTop: Border.xsm,
    flex: 0.5,
    alignSelf: "flex-start",
    fontSize: FontSize.uI16Semi_size,
  },
  PatientInformationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  bottomContainer: {
    flex: 0.75,
    width: "100%",
    alignItems: "center",
    paddingTop: "4%",
  },
  buttonContainer: {
    width: "90%",
    height: 50,
    backgroundColor: "#20A4F3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
  },
  caseId: {
    marginTop: Border.xsm,
    borderWidth: 2,
    borderColor: Color.black,
    height: 30,
  },
  distantText: {marginHorizontal: Border.xsm, fontSize: FontSize.uI16Semi_size},
});
export default PatientOverviewScreen;
