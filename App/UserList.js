import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { labels } from './labels';

const UserList = ({ users }) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.title}>{labels.registeredUsersTitle}</Text>
      {users.map((user, index) => (
        <View key={index} style={styles.userItem}>
          <Text style={styles.label}>{labels.nameLabel}</Text>
          <Text style={styles.value}>{user.name}</Text>
          <Text style={styles.label}>{labels.phoneLabel}</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginBottom: 5,
  },
});

export default UserList;