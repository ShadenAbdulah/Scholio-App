import { COLORS } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Card, CardSliderContent, defaultData } from '../component/cardSlider';

export default function Index() {
  const handleCardPress = (item: Card) => {
    console.log('Pressed card:', item);
  };

  const navigation = useNavigation<any>();

  return (
    <ScrollView className="p-10 flex-1 gap-14">
      <View className="flex-row justify-between items-center mb-14">
        <Text className="text-2xl">
          <Text className="font-light">Good Morning, </Text>
          <Text className="font-bold text-[#3347b0]">Shaden</Text>
        </Text>

        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <View className='flex-row justify-between mb-14'>
        <TouchableOpacity className='items-center'>
          <View className='rounded-full bg-[#ebf1f8] w-20 aspect-square'>
            <Ionicons name="book" size={24} color={COLORS.primary} className='m-auto' />
          </View>
          <Text className="mt-2 text-black text-center">Course {"\n"}Registration</Text>
        </TouchableOpacity>

        <TouchableOpacity className='items-center'>
          <View className='rounded-full bg-[#ebf1f8] w-20 aspect-square'>
            <Ionicons name="star" size={24} color={COLORS.primary} className='m-auto' />
          </View>
          <Text className="mt-2 text-black">Grades</Text>
        </TouchableOpacity>

        <TouchableOpacity className='items-center'>
          <View className='rounded-full bg-[#ebf1f8] w-20 aspect-square'>
            <Ionicons name="receipt" size={24} color={COLORS.primary} className='m-auto' />
          </View>
          <Text className="mt-2 text-black">Invoices</Text>
        </TouchableOpacity>

        <TouchableOpacity className='items-center'>
          <View className='rounded-full bg-[#ebf1f8] w-20 aspect-square'>
            <Ionicons name="ellipsis-horizontal" size={24} color={COLORS.primary} className='m-auto' />
          </View>
          <Text className="mt-2 text-black">Other</Text>
        </TouchableOpacity>
      </View>

      <View className='mb-14'>
        <View className='flex-row justify-between mb-5'>
          <Text className='text-lg font-bold'>My Courses</Text>
          <TouchableOpacity onPress={() => navigation.navigate("courses")} >
            <Text className='text-lg text-[#3347b0] font-light'>See All {'>'}</Text>
          </TouchableOpacity>
        </View>
        <CardSliderContent data={defaultData} onPressCard={handleCardPress} />
      </View>

      <View>
        <View className='flex-row justify-between mb-5'>
          <Text className='text-lg font-bold'>Announcement</Text>
          <Text
            className='text-lg text-[#a4a4a4] font-light'>See All {'>'}</Text>
        </View>
        <View className='bg-[#ebf1f8] w-full h-20 rounded-lg'>
          <Text className='text-center text-xl font-bold my-auto'>There is no announcements till now!</Text>
        </View>
      </View>
    </ScrollView>
  );
}
