// App.tsx
import React, { useState } from "react";
import { SafeAreaView, StatusBar, Button } from "react-native";
import type { AgendaSchedule } from "react-native-calendars";
import AgendaContent from "../component/agendaCalendar";

export default function Calendar() {
  const [items, setItems] = useState<AgendaSchedule>({
    "2025-09-28": [
      { name: "Morning standup", height: 60, day: "" },
      { name: "Design review", height: 80, day: "" },
    ],
    "2025-09-29": [{ name: "Write documentation", height: 80, day: "" }],
  });

  // Example: add event dynamically
  const addEvent = () => {
    const date = "2025-09-30";
    setItems((prev) => {
      const existing = prev[date] || [];
      return {
        ...prev,
        [date]: [
          ...existing,
          { name: `New task ${existing.length + 1}`, height: 60, day: "" },
        ],
      };
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Button title="Add Event on 2025-09-30" onPress={addEvent} />
      <AgendaContent items={items} setItems={setItems} />
    </SafeAreaView>
  );
}
