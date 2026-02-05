import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type StatsCardProps = {
  label: string;
  value: string;
  helper?: string;
};

export const StatsCard: React.FC<StatsCardProps> = ({ label, value, helper }) => (
  <View style={styles.card}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
    {helper ? <Text style={styles.helper}>{helper}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1F2937',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  label: { color: '#9CA3AF', fontSize: 12, marginBottom: 6 },
  value: { color: '#F9FAFB', fontSize: 22, fontWeight: '700' },
  helper: { color: '#6B7280', fontSize: 12, marginTop: 8 },
});
