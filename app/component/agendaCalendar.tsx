// agendaCalendar.tsx
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { AgendaEntry, AgendaSchedule } from "react-native-calendars";
import { Agenda } from "react-native-calendars";

type Props = {
  items: AgendaSchedule;
  setItems: React.Dispatch<React.SetStateAction<AgendaSchedule>>;
};

export default function AgendaContent({ items, setItems }: Props) {
  const [selectedDay, setSelectedDay] = useState<string>(
    Object.keys(items)[0] ?? ""
  );

  const renderItem = (item: AgendaEntry) => (
    <TouchableOpacity
      style={[styles.item, { height: item.height ?? 60 }]}
      onPress={() => {
        // Example: remove item on press
        setItems((prev) => {
          const date = selectedDay;
          const filtered = (prev[date] || []).filter(
            (ev) => (ev as any).name !== (item as any).name
          );
          return { ...prev, [date]: filtered };
        });
      }}
    >
      <Text style={styles.itemText}>{(item as any).name}</Text>
    </TouchableOpacity>
  );

  const renderEmptyDate = () => (
    <View style={styles.emptyDate}>
      <Text>No events</Text>
    </View>
  );

  return (
    <Agenda
      items={items}
      selected={selectedDay}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
      onDayPress={(day) => {
        if (day.dateString !== selectedDay) {
          setSelectedDay(day.dateString);
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "600",
  },
  emptyDate: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
  },
});
