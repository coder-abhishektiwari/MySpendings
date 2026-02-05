import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Expense } from '../models/types';

type PendingTransactionCardProps = {
  expense: Expense;
  onConfirm: () => void;
  onEdit: () => void;
  onIgnore: () => void;
};

export const PendingTransactionCard: React.FC<PendingTransactionCardProps> = ({
  expense,
  onConfirm,
  onEdit,
  onIgnore,
}) => (
  <View style={styles.card}>
    <View style={styles.headerRow}>
      <View>
        <Text style={styles.title}>₹{expense.amount} · {expense.merchant}</Text>
        <Text style={styles.subtitle}>One‑tap confirmation</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Pending</Text>
      </View>
    </View>
    <View style={styles.actions}>
      <TouchableOpacity style={styles.confirm} onPress={onConfirm}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondary} onPress={onEdit}>
        <Text style={styles.secondaryText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ghost} onPress={onIgnore}>
        <Text style={styles.ghostText}>Ignore</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0F172A',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: '#F8FAFC', fontSize: 16, fontWeight: '600' },
  subtitle: { color: '#94A3B8', fontSize: 12, marginTop: 4 },
  badge: {
    backgroundColor: '#1E293B',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  badgeText: { color: '#E2E8F0', fontSize: 11, fontWeight: '600' },
  actions: { flexDirection: 'row', marginTop: 12, gap: 8 },
  confirm: {
    backgroundColor: '#22C55E',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  confirmText: { color: '#052E16', fontWeight: '600' },
  secondary: {
    backgroundColor: '#1F2937',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  secondaryText: { color: '#E5E7EB' },
  ghost: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  ghostText: { color: '#9CA3AF' },
});
