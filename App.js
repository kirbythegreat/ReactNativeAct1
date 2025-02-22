import React, { useState } from "react";
import { Image, Text, TextInput, View, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./src/styles/MainStyle";

const App = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handlePress = () => {
    setUsername("Ferrari");
    setFirstName("Lewis");
    setLastName("Hamillton");
  };

  return (

    <ImageBackground 
      source={require("./src/assets/red.gif")} 
      style={styles.background}
    >

    <View style={styles.container}>

      <Image
          style={styles.logoStyle}
          source={require("./src/assets/ferrariLogo.png")}
        />

      <Text style={styles.textStyle}>Hello {firstName} {lastName}, Welcome to {username}!</Text>

      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.TextInput}
        placeholder="Enter Username"
      />

      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        style={styles.TextInput}
        placeholder="Enter First Name"
      />

      <TextInput
        value={firstName}
        onChangeText={setLastName}
        style={styles.TextInput}
        placeholder="Enter Last Name"
      />  

      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Image
          style={styles.imagemy}
          source={require("./src/assets/f40.jpg")}
        />
      </TouchableOpacity>
    </View>


    </ImageBackground>
  );
};

export default App;
