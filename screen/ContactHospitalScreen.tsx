import React, {useState, useEffect} from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from "react-native";
import SoundRecorder from "react-native-sound-recorder";
import {GiftedChat, Bubble} from "react-native-gifted-chat";
import AsyncStorage from "@react-native-community/async-storage";

const ContactHospitalScreen = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      const savedMessages = await AsyncStorage.getItem("messages");
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
    };
    loadMessages();
  }, []);

  useEffect(() => {
    const saveMessages = async () => {
      await AsyncStorage.setItem("messages", JSON.stringify(messages));
    };
    saveMessages();
  }, [messages]);

  const onSend = newMessages => {
    setMessages(currentMessages =>
      GiftedChat.append(currentMessages, newMessages),
    );
  };

  const recordAudio = async () => {
    try {
      if (Platform.OS === "android") {
        await requestPermission();
      }
      await SoundRecorder.start();
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    try {
      const filePath = await SoundRecorder.stop();
      const message = [
        {
          _id: messages.length + 1,
          createdAt: new Date(),
          user: {_id: 1, name: 'Me'},
          audio: filePath,
        },
      ];
      onSend(message);
    } catch (error) {
      console.error(error);
    }
  };

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "Microphone Permission",
          message: "ChatApp needs access to your microphone.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Microphone permission denied");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderBubble = props => (
    <Bubble
      {...props}
      textStyle={{
        right: {color: 'white'},
        left: {color: 'black'},
      }}
      wrapperStyle={{
        left: {backgroundColor: '#EEE'},
        right: {backgroundColor: '#0084ff'},
      }}
    />
  );

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{_id: 1}}
        renderBubble={renderBubble}
        renderInputToolbar={props => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type a message"
            />
            <Button title="Send" onPress={() => onSend([{text: inputText}])} />
            <Button title="Record" onPress={recordAudio} />
            <Button title="Stop" onPress={stopRecording} />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
