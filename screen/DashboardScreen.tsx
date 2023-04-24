import * as React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {Border, Color, FontSize} from "../GlobalStyle/GlobalStyles";

// @ts-ignore
const DashboardScreen = ({navigation}) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      speciality: "Cardiology",
      buttonText: "Dr. Bellamy N",
      distance: "12",
      uri: require("../assets/doctor-images/bd7acbea-c1b1-46c2-aed5-3ad53abb28ba.png"),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      speciality: "Cardiology",
      buttonText: "Dr. Mensah T",
      distance: "30",
      uri: require("../assets/doctor-images/3ac68afc-c605-48d3-a4f8-fbd91aa97f63.png"),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      speciality: "Cardiology",
      buttonText: "Dr. O’Boyle J",
      distance: "70",
      uri: require("../assets/doctor-images/58694a0f-3da1-471f-bd96-145571e29d72.png"),
    },
    {
      id: "1448f961-3b5d-4d81-895e-aac96aefdbed",
      speciality: "Cardiology",
      buttonText: "Dr. Marc M",
      distance: "70",
      uri: require("../assets/doctor-images/1448f961-3b5d-4d81-895e-aac96aefdbed.png"),
    },
    {
      id: "3aa28493-2173-4082-bc6f-78a1d9d0c689",
      speciality: "Cardiology",
      buttonText: "Dr. Mensah T",
      distance: "70",
      uri: require("../assets/doctor-images/3aa28493-2173-4082-bc6f-78a1d9d0c689.png"),
    },
    {
      id: "20ce3cd5-55b4-424c-a46a-1555bf625dbc",
      speciality: "Cardiology",
      buttonText: "Dr. Bellamy N",
      distance: "70",
      uri: require("../assets/doctor-images/20ce3cd5-55b4-424c-a46a-1555bf625dbc.png"),
    },
    {
      id: "20ce3cd5-55b4-424c-a46a-1555bf625dbc",
      speciality: "Cardiology",
      buttonText: "Dr. Bellamy N",
      distance: "70",
      uri: require("../assets/doctor-images/20ce3cd5-55b4-424c-a46a-1555bf625dbc.png"),
    },
  ];

  // @ts-ignore
  const Item = ({title, speciality, distance, uri}) => {
    return (
      <View style={styles.item}>
        <Image source={uri} style={styles.itemImage} />
        <Text style={styles.buttonText}>{title}</Text>
        <Text style={styles.subTitle}>{speciality}</Text>
        <Text style={styles.locationText}>{distance} mins away</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        <Text style={styles.subHeaderText}>Ongoing Case(s)</Text>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => console.log("pressed")}>
              <Item
                title={item.title}
                speciality={item.speciality}
                distance={item.distance}
                uri={item.uri}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  header: {
    flex: 1.5,
  },
  headerText: {
    marginTop: 20,
    color: Color.deepskyblue_100,
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    fontWeight: "bold",
  },
  subHeaderText: {
    marginTop: 20,
    color: Color.slategray_100,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
  },
  subTitle: {color: "black", textAlign: "center"},
  locationText: {color: "black", textAlign: "center"},
  bottomContainer: {
    flexDirection: "row",
    flex: 8.5,
    justifyContent: "center",
    alignSelf: "center",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: Border.xsm,
    paddingTop: Border.xsm,
  },
  item: {
    padding: 40,
    marginHorizontal: -10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "white",
  },
  itemImage: {
    marginTop: -10,
    width: 70,
    height: 70,
    borderRadius: 50,
    alignSelf: "center",
  },
});

export default DashboardScreen;
