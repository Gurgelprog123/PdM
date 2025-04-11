import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { labels } from './labels';

const UserForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    if (name.trim() && phone.trim()) {
      onRegister({ name, phone });
      setName('');
      setPhone('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder={labels.nameLabel}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder={labels.phoneLabel}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button
        title={labels.registerButton}
        onPress={handleRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default UserForm;