import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PendingTransactionCard } from '../components/PendingTransactionCard';

const mockExpense = {
  id: 'pending-1',
  amount: 250,
  currency: 'INR',
  merchant: 'Zomato',
  categoryId: 'food',
  timestamp: Date.now(),
  type: 'debit' as const,
  status: 'pending' as const,
  source: 'sms' as const,
};

export const InboxScreen: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Inbox</Text>
      <Text style={styles.subtitle}>1 pending confirmation</Text>
    </View>
    <PendingTransactionCard
      expense={mockExpense}
      onConfirm={() => null}
      onEdit={() => null}
      onIgnore={() => null}
    />
    <View style={styles.tipCard}>
      <Text style={styles.tipTitle}>Tip</Text>
      <Text style={styles.tipText}>Confirming transactions helps keep budgets accurate.</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 20, gap: 16 },
  header: { gap: 4 },
  title: { color: '#F8FAFC', fontSize: 22, fontWeight: '700' },
  subtitle: { color: '#94A3B8', fontSize: 12 },
  tipCard: {
    backgroundColor: '#0F172A',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  tipTitle: { color: '#E2E8F0', fontSize: 12, textTransform: 'uppercase' },
  tipText: { color: '#94A3B8', fontSize: 12, marginTop: 6 },
});
