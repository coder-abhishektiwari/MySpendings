import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BudgetsScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Budgets</Text>
    <Text style={styles.item}>Food · ₹5,000 · 80% used</Text>
    <Text style={styles.item}>Travel · ₹3,000 · 60% used</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 20 },
  title: { color: '#F8FAFC', fontSize: 20, fontWeight: '700', marginBottom: 12 },
  item: { color: '#CBD5F5', marginBottom: 8 },
});
