import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const BudgetsScreen: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.headerRow}>
      <Text style={styles.title}>Budgets</Text>
      <View style={styles.addButton}>
        <Text style={styles.addButtonText}>+ New</Text>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Text style={styles.cardTitle}>Food & Dining</Text>
        <Text style={styles.cardValue}>₹5,000</Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: '80%' }]} />
      </View>
      <Text style={styles.cardMeta}>₹4,000 spent · ₹1,000 left</Text>
    </View>
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Text style={styles.cardTitle}>Travel</Text>
        <Text style={styles.cardValue}>₹3,000</Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: '60%' }]} />
      </View>
      <Text style={styles.cardMeta}>₹1,800 spent · ₹1,200 left</Text>
    </View>
    <View style={styles.cardMuted}>
      <Text style={styles.cardHint}>Set budgets to stay on top of monthly spending.</Text>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#020617', padding: 20, gap: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: '#F8FAFC', fontSize: 22, fontWeight: '700' },
  addButton: {
    backgroundColor: '#1E293B',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  addButtonText: { color: '#E2E8F0', fontSize: 12, fontWeight: '600' },
  card: {
    backgroundColor: '#0F172A',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  cardMuted: {
    backgroundColor: '#0B1220',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  cardHint: { color: '#94A3B8', fontSize: 13 },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { color: '#F8FAFC', fontSize: 16, fontWeight: '600' },
  cardValue: { color: '#CBD5F5', fontSize: 14, fontWeight: '600' },
  progressTrack: {
    height: 8,
    borderRadius: 999,
    backgroundColor: '#111827',
    marginTop: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#38BDF8',
  },
  cardMeta: { color: '#94A3B8', fontSize: 12, marginTop: 10 },
});
