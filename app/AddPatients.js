import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export default function AddPatients({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const formattedDate = date.toLocaleDateString('en-GB');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>REGISTER</Text>

        <Text>First Name</Text>
        <View style={styles.shadowWrapper}>
          <TextInput
            style={styles.inputInner}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        <Text>Last Name</Text>
        <View style={styles.shadowWrapper}>
          <TextInput
            style={styles.inputInner}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <Text>Date of Birth</Text>
        <View style={styles.shadowWrapper}>
          <TouchableOpacity
            style={styles.inputInner}
            onPress={() => setShow(true)}
          >
            <Text style={styles.dateText}>{formattedDate}</Text>
          </TouchableOpacity>
        </View>

        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}
        <Text>Gender</Text>
        <View style={styles.shadowWrapper}>
          
        </View>

       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  shadowWrapper: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 4,
  },
  inputInner: {
    height: 40,
    paddingHorizontal: 10,
  },
  dateText: { fontSize: 16, color: '#000', lineHeight: 40 },
});