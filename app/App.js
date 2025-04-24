import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './Dash.js';
import AddPatients from './AddPatients.js';
import Appointments from './Appointments.js';
import DoctorLogin from './DoctorLogin.js';
import Messages from './Messages.js';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
    headerStyle: { backgroundColor: '#4A90E2' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
  }}
  initialRouteName="Home">
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="AddPatients" component={AddPatients} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
        <Stack.Screen name="Messages" component={Messages} />
  
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
