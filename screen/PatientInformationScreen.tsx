import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {Border, Color, FontSize} from "../GlobalStyle/GlobalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import * as React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux-toolkit/store/store";
// @ts-ignore
import SwitchSelector from "react-native-switch-selector";

// @ts-ignore
const PatientInformationScreen = ({navigation}) => {
  const patientInformation = useSelector(
    (state: RootState) => state.patientInformation.value,
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    {label: "Viralogist", value: "Viralogist"},
    {label: "Oncologists", value: "Oncologists"},
    {label: "Surgeon", value: "Surgeon"},
    {label: "Pediatrician", value: "Pediatrician"},
    {label: "Rheumatologists", value: "Rheumatologists"},
  ]);

  const genderOptions = [
    {label: "Male", value: "male"},
    {label: "Female", value: "female"},
    {label: "Other", value: "other"},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}> Patient Information </Text>
      </View>
      <View style={styles.selectionSection}>
        <Text style={styles.specialtyText}>Specialty in need</Text>
        <View style={styles.dropDown}>
          <DropDownPicker
            placeholder="Select specialty"
            setValue={setValue}
            value={value}
            items={items}
            open={open}
            setOpen={setOpen}
            setItems={setItems}
            zIndexInverse={2}
            style={{
              backgroundColor: Color.milkWhite,
            }}
            textStyle={{
              color: Color.darkslategray_100,
              fontWeight: "bold",
            }}
            dropDownContainerStyle={{
              backgroundColor: Color.milkWhite,
            }}
          />
        </View>
        <Text style={styles.titleBold}>Patient Details</Text>
        <Text style={[styles.subTitleContainer, styles.specialtyText]}>
          Gender
        </Text>
        <SwitchSelector
          options={genderOptions}
          textColor={Color.darkslategray_100}
          selectedColor={Color.white}
          buttonColor={Color.deepskyblue_100}
          borderColor={Color.slategray_200}
          borderRadius={90}
          animationDuration={150}
          backgroundColor={Color.milkWhite}
          height={50}
          borderWidth={2}
          style={styles.selectorButton}
          initial={2}
          onPress={(r: any) => console.log(`Call onPress with value: ${r}`)}
        />

        <View style={styles.subTitleContainer}>
          <Text style={styles.specialtyText}>Age</Text>
          <TextInput
            style={{
              paddingTop: Border.xsm,
              backgroundColor: Color.shadedWhite,
              borderRadius: Border.xsm,
              color: Color.black,
            }}
            placeholder={"Please enter patient age"}
            placeholderTextColor={Color.gray04}
            onBlur={r => {
              console.log(r.nativeEvent.text);
            }}
          />
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.specialtyText}>Short Description</Text>
          <TextInput
            style={{
              paddingTop: Border.xsm,
              backgroundColor: Color.shadedWhite,
              borderRadius: Border.xsm,
              color: Color.black,
            }}
            multiline={true}
            numberOfLines={4}
            placeholder={"Please describe your case"}
            placeholderTextColor={Color.gray04}
            textAlignVertical={"top"}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: 45,
            }}>
            <TouchableOpacity
              style={{alignItems: "center"}}
              onPress={() => {
                console.log("pressed camera");
              }}>
              <Image
                source={require("../assets/camera.450.png")}
                style={{
                  width: 90,
                  height: 90,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
              />
              <Text style={styles.specialtyText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignItems: "center"}}
              onPress={() => {
                console.log("pressed mic");
              }}>
              <Image
                source={require("../assets/mic.png")}
                style={{
                  width: 90,
                  height: 90,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
              />
              <Text style={styles.specialtyText}>Voice Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Find Doctor");
          }}>
          <Text style={styles.buttonText}>Search for Doctors</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Color.white, zIndex: 1},
  textContainer: {
    height: "10%",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
  },
  titleBold: {
    marginTop: Border.lg,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
  },
  specialtyText: {
    color: Color.slategray_100,
    fontSize: FontSize.size_sm,
    paddingBottom: Border.xsm,
    fontWeight: "bold",
  },
  selectionSection: {
    flexGrow: 1,
    width: "90%",
    alignSelf: "center",
  },
  dropDown: {zIndex: 2},
  selectorButton: {marginTop: Border.lg},
  subTitleContainer: {marginTop: Border.lg},
  buttonContainer: {
    marginTop: Border.lg,
    width: "100%",
    height: 50,
    backgroundColor: "#20A4F3",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  bottomContainer: {
    paddingBottom: Border.xsm,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default PatientInformationScreen;
