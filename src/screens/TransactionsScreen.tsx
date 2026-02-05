import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const TransactionsScreen: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.headerRow}>
      <View>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.subtitle}>Showing last 7 days</Text>
      </View>
      <View style={styles.filterPill}>
        <Text style={styles.filterText}>Filters</Text>
      </View>
    </View>
    <View style={styles.group}>
      <Text style={styles.groupTitle}>Today</Text>
      <View style={styles.row}>
        <View>
          <Text style={styles.itemTitle}>Swiggy</Text>
          <Text style={styles.itemMeta}>Food · 6:45 PM</Text>
        </View>
        <Text style={styles.itemValue}>₹320</Text>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.itemTitle}>Netflix</Text>
          <Text style={styles.itemMeta}>Subscriptions · 9:10 AM</Text>
        </View>
        <Text style={styles.itemValue}>₹499</Text>
      </View>
    </View>
    <View style={styles.group}>
      <Text style={styles.groupTitle}>Yesterday</Text>
      <View style={styles.row}>
        <View>
          <Text style={styles.itemTitle}>Uber</Text>
          <Text style={styles.itemMeta}>Travel · 8:20 PM</Text>
        </View>
        <Text style={styles.itemValue}>₹1,200</Text>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.itemTitle}>BigBasket</Text>
          <Text style={styles.itemMeta}>Groceries · 12:40 PM</Text>
        </View>
        <Text style={styles.itemValue}>₹860</Text>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#020617', padding: 20, gap: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: '#F8FAFC', fontSize: 22, fontWeight: '700' },
  subtitle: { color: '#94A3B8', fontSize: 12, marginTop: 4 },
  filterPill: {
    backgroundColor: '#1E293B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  filterText: { color: '#E2E8F0', fontSize: 12, fontWeight: '600' },
  group: { gap: 12 },
  groupTitle: { color: '#94A3B8', fontSize: 12, textTransform: 'uppercase' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0F172A',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  itemTitle: { color: '#F8FAFC', fontSize: 15, fontWeight: '600' },
  itemMeta: { color: '#94A3B8', fontSize: 12, marginTop: 4 },
  itemValue: { color: '#38BDF8', fontSize: 15, fontWeight: '700' },
});
