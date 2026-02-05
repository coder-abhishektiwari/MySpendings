import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatsCard } from '../components/StatsCard';

export const HomeScreen: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.headerRow}>
      <View>
        <Text style={styles.header}>This Month</Text>
        <Text style={styles.subHeader}>March 2024 · All accounts</Text>
      </View>
      <View style={styles.statusPill}>
        <Text style={styles.statusText}>On track</Text>
      </View>
    </View>
    <StatsCard label="Total Spend" value="₹12,450" helper="↑ 8% vs last month" />
    <StatsCard label="Remaining Budget" value="₹7,550" helper="Safe zone" />
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Quick actions</Text>
      <View style={styles.chipRow}>
        <Text style={styles.chip}>+ Add expense</Text>
        <Text style={styles.chip}>View insights</Text>
        <Text style={styles.chip}>Set budget</Text>
      </View>
    </View>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <View style={styles.categoryRow}>
        <Text style={styles.item}>Food</Text>
        <Text style={styles.itemValue}>₹4,200</Text>
      </View>
      <View style={styles.categoryRow}>
        <Text style={styles.item}>Travel</Text>
        <Text style={styles.itemValue}>₹2,100</Text>
      </View>
      <View style={styles.categoryRow}>
        <Text style={styles.item}>Shopping</Text>
        <Text style={styles.itemValue}>₹1,800</Text>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#020617', padding: 20, gap: 12 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  header: { color: '#F8FAFC', fontSize: 24, fontWeight: '700' },
  subHeader: { color: '#94A3B8', fontSize: 12, marginTop: 4 },
  statusPill: {
    backgroundColor: '#0F172A',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  statusText: { color: '#E2E8F0', fontSize: 12, fontWeight: '600' },
  section: { marginTop: 4 },
  sectionTitle: { color: '#94A3B8', fontSize: 12, marginBottom: 8, textTransform: 'uppercase' },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    color: '#E2E8F0',
    backgroundColor: '#0F172A',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#1E293B',
    overflow: 'hidden',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#0F172A',
  },
  item: { color: '#E2E8F0', fontSize: 14 },
  itemValue: { color: '#F8FAFC', fontSize: 14, fontWeight: '600' },
});
