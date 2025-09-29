import { COLORS } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CourseContent from '../component/coursesDetails';
import SearchBar from '../component/searchBar';

export default function Courses() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 30 }} // padding inside scroll
      showsVerticalScrollIndicator={true}
    >
      {/* Header */}
      <View className="flex-row justify-between items-center mb-10">
        <Text className="text-2xl">
          <Text className="font-light">Good Morning, </Text>
          <Text className="font-bold text-[#3347b0]">Shaden</Text>
        </Text>

        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

          <Text className="font-bold text-3xl text-[#3347b0] text-center mb-10">My Courses</Text>

      {/* Search Bar */}
      <View className="bg-white w-full rounded-2xl mb-10">
        <SearchBar onSearch={handleSearch} />
      </View>

      {/* Course List */}
      <CourseContent />
    </ScrollView>
  );
}
