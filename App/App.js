import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { labels } from './components/labels';

export default function App() {
  const [users, setUsers] = useState([]);

  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>{labels.appTitle}</Text>
      <UserForm onRegister={handleRegister} />
      <UserList users={users} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});