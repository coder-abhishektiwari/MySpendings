import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export const ManualEntryScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Manual Entry</Text>
    <TextInput placeholder="Amount" placeholderTextColor="#64748B" style={styles.input} />
    <TextInput placeholder="Category" placeholderTextColor="#64748B" style={styles.input} />
    <TextInput placeholder="Note" placeholderTextColor="#64748B" style={styles.input} />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 20 },
  title: { color: '#F8FAFC', fontSize: 20, fontWeight: '700', marginBottom: 16 },
  input: {
    backgroundColor: '#0F172A',
    color: '#E2E8F0',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  button: { backgroundColor: '#22C55E', padding: 14, borderRadius: 12 },
  buttonText: { textAlign: 'center', color: '#052E16', fontWeight: '700' },
});
