import React, { useMemo, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export type Session = {
  id: string;
  time: string; // e.g., "09:00 - 10:00"
  title: string;
  speakerId?: string;
  location?: string;
};

export type DaySchedule = {
  id: string; // e.g., "day1"
  date: string; // e.g., "Mon, Dec 1"
  sessions: Session[];
};

const SCHEDULE: DaySchedule[] = [
  {
    id: 'day1',
    date: 'Day 1 — Monday',
    sessions: [
      { id: 'd1s1', time: '09:00 - 10:00', title: 'Opening Ceremony & Keynote', speakerId: 's1', location: 'Main Hall' },
      { id: 'd1s2', time: '10:15 - 11:00', title: 'Pwani Startup Showcase', location: 'Main Hall' },
      { id: 'd1s3', time: '11:15 - 12:30', title: 'Panel: Blue Economy Opportunities', speakerId: 's3', location: 'Auditorium' },
    ],
  },
  {
    id: 'day2',
    date: 'Day 2 — Tuesday',
    sessions: [
      { id: 'd2s1', time: '09:00 - 10:30', title: 'Design Thinking Workshop', speakerId: 's5', location: 'Workshop Room A' },
      { id: 'd2s2', time: '10:45 - 12:00', title: 'Tech for Coastal Communities', speakerId: 's2', location: 'Auditorium' },
    ],
  },
  {
    id: 'day3',
    date: 'Day 3 — Wednesday',
    sessions: [
      { id: 'd3s1', time: '09:00 - 10:00', title: 'Digital Marketing for SMEs', location: 'Room B' },
      { id: 'd3s2', time: '10:15 - 11:30', title: 'Investor Office Hours', location: 'Lounge' },
    ],
  },
  {
    id: 'day4',
    date: 'Day 4 — Thursday',
    sessions: [
      { id: 'd4s1', time: '09:00 - 10:30', title: 'Building with Open Source', speakerId: 's4', location: 'Auditorium' },
      { id: 'd4s2', time: '10:45 - 12:00', title: 'GovTech Roundtable', location: 'Main Hall' },
    ],
  },
  {
    id: 'day5',
    date: 'Day 5 — Friday',
    sessions: [
      { id: 'd5s1', time: '09:00 - 10:00', title: 'Careers in Tech: Ask Me Anything', location: 'Main Hall' },
      { id: 'd5s2', time: '10:15 - 12:00', title: 'Closing Ceremony & Awards', speakerId: 's1', location: 'Main Hall' },
    ],
  },
];

const DayTab = ({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} className={`px-3 py-2 rounded-full ${active ? 'bg-blue-600' : 'bg-gray-100'}`}>
    <Text className={`${active ? 'text-white' : 'text-gray-700'} text-sm font-medium`}>{label}</Text>
  </TouchableOpacity>
);

export const ScheduleList = () => {
  const [dayIndex, setDayIndex] = useState(0);
  const day = useMemo(() => SCHEDULE[dayIndex], [dayIndex]);

  return (
    <View className="flex-1 bg-white">
      <View className="px-4 pt-4">
        <Text className="text-xl font-bold text-gray-900">Schedule</Text>
        <Text className="text-sm text-gray-600">Pwani Innovation Week — 5 days</Text>
      </View>

      <View className="px-4 py-3">
        <View className="flex-row gap-2 flex-wrap">
          {SCHEDULE.map((d, idx) => (
            <DayTab key={d.id} label={`Day ${idx + 1}`} active={idx === dayIndex} onPress={() => setDayIndex(idx)} />
          ))}
        </View>
      </View>

      <FlatList
        data={day.sessions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        ListHeaderComponent={() => (
          <View className="py-2">
            <Text className="text-base font-semibold text-gray-800">{day.date}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View className="h-[1px] bg-gray-200" />}
        renderItem={({ item }) => (
          <View className="py-4">
            <Text className="text-sm text-gray-600">{item.time}{item.location ? ` • ${item.location}` : ''}</Text>
            <Text className="text-base font-semibold text-gray-900">{item.title}</Text>
            {item.speakerId && (
              <Text className="text-sm text-gray-700">Speaker: {item.speakerId.toUpperCase()}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
};
