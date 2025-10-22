import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { ScheduleList } from 'components/ScheduleList';
import { SpeakersList } from 'components/SpeakersList';

import './global.css';

export default function App() {
  const [tab, setTab] = useState<'schedule' | 'speakers'>('schedule');

  return (
    <View className="flex-1 bg-white">
      <View className="px-4 pt-12 pb-3 bg-white border-b border-gray-200">
        <Text className="text-2xl font-extrabold text-gray-900">Pwani Innovation Week</Text>
        <Text className="text-sm text-gray-600">Speakers and 5-day schedule</Text>
      </View>

      <View className="flex-1">
        {tab === 'schedule' ? <ScheduleList /> : <SpeakersList />}
      </View>

      <BottomTabBar tab={tab} setTab={setTab} />

      <StatusBar style="auto" />
    </View>
  );
}

const BottomTabBar = ({
  tab,
  setTab,
}: {
  tab: 'schedule' | 'speakers';
  setTab: (t: 'schedule' | 'speakers') => void;
}) => {
  return (
    <View className="border-t border-gray-200 bg-white">
      <View className="flex-row justify-around py-2">
        <TabItem
          label="Schedule"
          active={tab === 'schedule'}
          icon={(active) => (
            <Ionicons name={active ? 'calendar' : 'calendar-outline'} size={22} color={active ? '#2563eb' : '#6b7280'} />
          )}
          onPress={() => setTab('schedule')}
        />
        <TabItem
          label="Speakers"
          active={tab === 'speakers'}
          icon={(active) => (
            <Ionicons name={active ? 'people' : 'people-outline'} size={22} color={active ? '#2563eb' : '#6b7280'} />
          )}
          onPress={() => setTab('speakers')}
        />
      </View>
    </View>
  );
};

const TabItem = ({
  label,
  active,
  icon,
  onPress,
}: {
  label: string;
  active: boolean;
  icon: (active: boolean) => React.ReactNode;
  onPress: () => void;
}) => (
  <TouchableOpacity onPress={onPress} className="items-center gap-1 px-3 py-1" accessibilityRole="button">
    {icon(active)}
    <Text className={`${active ? 'text-blue-600' : 'text-gray-600'} text-xs font-medium`}>{label}</Text>
  </TouchableOpacity>
);
