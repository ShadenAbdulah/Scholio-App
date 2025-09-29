import React from "react";
import { ScrollView, Text, View } from "react-native";

type Course = {
    id: string;
    name: string;
    nextClass: Date;
    absents: number;
};

const courses: Course[] = [
    {
        id: "1",
        name: "Mathematics",
        nextClass: new Date("2025-10-01T09:00:00"),
        absents: 2,
    },
    {
        id: "2",
        name: "Physics",
        nextClass: new Date("2025-09-30T14:30:00"),
        absents: 0,
    },
    {
        id: "3",
        name: "Computer Science",
        nextClass: new Date("2025-09-29T11:00:00"),
        absents: 1,
    },
];

const isToday = (date: Date) => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
};

const formatDate = (date: Date) => {
    return date.toLocaleDateString();
};

const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <View className="bg-[#ebf1f8] rounded-2xl p-4 mb-4">
        <Text className="text-xl font-bold text-[#3347b0]">{course.name}</Text>

        <View className="mt-2 flex-col gap-5">
            <View className="flex-row justify-between w-1/2 mt-5">
                <Text className="font-bold text-lg">Date</Text>
                {isToday(course.nextClass) ?
                    <Text className="font-regular text-lg bg-[#3347b0] text-white rounded-lg px-4 py-0.5">
                        Today
                    </Text> :
                    <Text className="font-regular text-lg">
                        {formatDate(course.nextClass)}
                    </Text>}
            </View>

            <View className="flex-row justify-between w-1/2">
                <Text className="font-bold text-lg">Time</Text>
                <Text className="font-regular text-lg">{formatTime(course.nextClass)}</Text>
            </View>

            <View className="flex-row justify-between w-1/2">
                <Text className="font-bold text-lg">Absents</Text>
                <Text className="font-regular text-lg">{course.absents}</Text>
            </View>
        </View>
    </View>
);

const CourseContent: React.FC = () => {
    const sortedCourses = [...courses].sort(
        (a, b) => a.nextClass.getTime() - b.nextClass.getTime()
    );

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
            {sortedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </ScrollView>
    );
};

export default CourseContent;
