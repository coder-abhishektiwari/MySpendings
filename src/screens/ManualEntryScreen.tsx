import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export const ManualEntryScreen: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <Text style={styles.title}>Manual Entry</Text>
    <Text style={styles.subtitle}>Capture an expense with a quick note.</Text>
    <View style={styles.row}>
      <TextInput
        placeholder="Amount"
        placeholderTextColor="#64748B"
        keyboardType="numeric"
        style={[styles.input, styles.amountInput]}
      />
      <TextInput
        placeholder="Currency"
        placeholderTextColor="#64748B"
        style={[styles.input, styles.currencyInput]}
      />
    </View>
    <TextInput placeholder="Category" placeholderTextColor="#64748B" style={styles.input} />
    <TextInput placeholder="Note" placeholderTextColor="#64748B" style={styles.input} />
    <View style={styles.tagRow}>
      <Text style={styles.tag}>Food</Text>
      <Text style={styles.tag}>Travel</Text>
      <Text style={styles.tag}>Shopping</Text>
      <Text style={styles.tag}>Subscriptions</Text>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Save expense</Text>
    </TouchableOpacity>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#020617', padding: 20, gap: 12 },
  title: { color: '#F8FAFC', fontSize: 22, fontWeight: '700' },
  subtitle: { color: '#94A3B8', fontSize: 13, marginBottom: 8 },
  row: { flexDirection: 'row', gap: 12 },
  input: {
    backgroundColor: '#0F172A',
    color: '#E2E8F0',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  amountInput: { flex: 2 },
  currencyInput: { flex: 1 },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: {
    color: '#E2E8F0',
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#1E293B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  button: { backgroundColor: '#22C55E', padding: 14, borderRadius: 12, marginTop: 4 },
  buttonText: { textAlign: 'center', color: '#052E16', fontWeight: '700' },
});
