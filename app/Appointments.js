import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const TABS = ['Upcoming', 'Past', 'Canceled'];

const appointments = [
  {
    id: '1',
    name: 'Harry Smith',
    time: '10:30 AM',
    reason: 'Heapsime',
  },
  {
    id: '2',
    name: 'Emily Brown',
    time: '11:00 AM',
    reason: 'Follow-up',
  },
  {
    id: '3',
    name: 'John Doe',
    time: '11:00 AM',
    reason: 'Follow-up Consultation',
  },
];

export default function AppointmentsScreen() {
  const [selectedTab, setSelectedTab] = useState('Upcoming');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Appointments</Text>

      <View style={styles.tabContainer}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[
              styles.tab,
              selectedTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.dateBox}>
        <Text style={styles.dateText}>April 22, 2024</Text>
      </TouchableOpacity>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.reason}>{item.reason}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tab: {
    marginRight: 20,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  dateBox: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reason: {
    color: '#6B7280',
    fontSize: 14,
  },
  time: {
    fontSize: 14,
    color: '#6B7280',
  },
});
