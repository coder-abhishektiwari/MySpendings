import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TransactionsScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Transactions</Text>
    <Text style={styles.item}>₹320 · Swiggy · Food</Text>
    <Text style={styles.item}>₹1,200 · Uber · Travel</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 20 },
  title: { color: '#F8FAFC', fontSize: 20, fontWeight: '700', marginBottom: 12 },
  item: { color: '#CBD5F5', marginBottom: 8 },
});
