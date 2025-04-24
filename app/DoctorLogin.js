import { StatusBar } from 'expo-status-bar';

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { StyleSheet } from 'react-native';
import { useState } from "react";

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; // Import the FontAwesome icon library
import { AntDesign } from '@expo/vector-icons'; // Import the AntDesign icon library    

export default function DoctorLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
     
    navigation.navigate("DoctorHomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Doctor Login</Text>
      <View style={styles.inputContainer}>
        <Text><FontAwesome name="envelope" size={20} color="black" /> Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text><FontAwesome name="lock" size={20} color="black" /> Password:</Text>
        <TextInput 
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    inputContainer: {
      width: "80%",
      marginBottom: 15,
    },
    input: {
      height: 40,
      borderColor: "#ccc",
      borderWidth: 1,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: "#007BFF",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
    },
    link: {
      marginTop: 15,
      color: "#007BFF",
      textDecorationLine: "underline",
    },
  });

