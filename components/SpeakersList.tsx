import React from 'react';
import { FlatList, Text, View } from 'react-native';

export type Speaker = {
  id: string;
  name: string;
  role?: string;
  organization?: string;
};

const SPEAKERS: Speaker[] = [
  { id: 's1', name: 'Amina Mwangi', role: 'Keynote Speaker', organization: 'Pwani Innovation Hub' },
  { id: 's2', name: 'John Ochieng', role: 'CTO', organization: 'Coastal Tech Labs' },
  { id: 's3', name: 'Fatma Ali', role: 'Program Manager', organization: 'Blue Economy Initiative' },
  { id: 's4', name: 'Samuel Kariuki', role: 'Founder', organization: 'Mombasa Startups' },
  { id: 's5', name: 'Zainab Noor', role: 'UX Lead', organization: 'Swahili Design Studio' },
];

export const SpeakersList = () => {
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={SPEAKERS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View className="h-[1px] bg-gray-200" />}
        renderItem={({ item }) => (
          <View className="py-4">
            <Text className="text-base font-semibold text-gray-900">{item.name}</Text>
            {(item.role || item.organization) && (
              <Text className="text-sm text-gray-600">
                {item.role}
                {item.role && item.organization ? ' • ' : ''}
                {item.organization}
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
};
