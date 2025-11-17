import { StyleSheet, View } from 'react-native';

import { Text as ThemedText, View as ThemedView } from '@/components/Themed';
import React from 'react';

export default function FmScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Swahilipot FM</ThemedText>
      <ThemedText style={styles.subtitle}>Live coastal stories, music, and culture.</ThemedText>
      <View style={styles.card}>
        <ThemedText style={styles.cardTitle}>Now Playing</ThemedText>
        <ThemedText style={styles.cardBody}>Hook up stream controls here.</ThemedText>
      </View>
      <View style={styles.card}>
        <ThemedText style={styles.cardTitle}>Shows</ThemedText>
        <ThemedText style={styles.cardBody}>List scheduled shows and hosts.</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  card: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardBody: {
    fontSize: 14,
    lineHeight: 20,
  },
});
