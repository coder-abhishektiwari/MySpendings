import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatsCard } from '../components/StatsCard';

export const HomeScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.header}>This Month</Text>
    <StatsCard label="Total Spend" value="₹12,450" helper="↑ 8% vs last month" />
    <StatsCard label="Remaining Budget" value="₹7,550" helper="Safe zone" />
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <Text style={styles.item}>Food · ₹4,200</Text>
      <Text style={styles.item}>Travel · ₹2,100</Text>
      <Text style={styles.item}>Shopping · ₹1,800</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 20 },
  header: { color: '#F8FAFC', fontSize: 22, fontWeight: '700', marginBottom: 16 },
  section: { marginTop: 12 },
  sectionTitle: { color: '#94A3B8', fontSize: 12, marginBottom: 8 },
  item: { color: '#E2E8F0', fontSize: 14, marginBottom: 6 },
});
