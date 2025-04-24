
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { StyleSheet } from 'react-native';
export default function Messages({ navigation }) {
   
    
    return (
        <View style={styles.container}>

            <View style={styles.Messagebox}>
                <View>
                    <Text style={{fontSize: 20}}>Name:</Text>
                    <Text> Messages</Text>
                </View>
                <View>
                <Text>1/1/25</Text>
                </View>
            </View>


            <View style={styles.Messagebox}>
                <View>
                    <Text style={{fontSize: 20}} >Name:</Text>
                    <Text> Messages</Text>
                </View>
                <View>
                <Text>1/1/25</Text>
                </View>
            </View>


            <View style={styles.Messagebox}>
                <View>
                    <Text style={{fontSize: 20}}>Name:</Text>
                    <Text> Messages</Text>
                </View>
                <View>
                <Text>1/1/25</Text>
                </View>
            </View>


            <View style={styles.Messagebox}>
                <View>
                    <Text style={{fontSize: 20}} >Name:</Text>
                    <Text> Messages</Text>
                </View>
                <View>
                <Text>1/1/25</Text>
                </View>
            </View>


            <View style={styles.Messagebox}>
                <View>
                    <Text style={{fontSize: 20}} >Name:</Text>
                    <Text> Messages</Text>
                </View>
                <View>
                <Text>1/1/25</Text>
                </View>
            </View>


            <View style={styles.Messagebox}>
                <View>
                    <Text style={{fontSize: 20}}>Name:</Text>
                    <Text> Messages</Text>
                </View>
                <View>
                <Text>1/1/25</Text>
                </View>
            </View>
        </View>
    );



};
const styles = StyleSheet.create({
   Messagebox: {
        backgroundColor: '#fff',

        height: '10%',
        
        margin: 10,
        borderRadius: 10,

        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
         // Shadow for iOS
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  // Shadow for Android
  elevation: 5,
  backgroundColor: "#fff", // required for shadow to appear
    
        
    },
    container:{
        flex: 1,
     
        top: '5%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        
    }


});
