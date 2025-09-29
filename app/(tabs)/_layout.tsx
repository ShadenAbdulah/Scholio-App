import { COLORS } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import '../../global.css';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                sceneStyle: {backgroundColor: "white"},
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.secondary,
                tabBarStyle: {
                    borderTopWidth: 0.5,
                    position: "absolute",
                    elevation: 0,
                    height: 40,
                    paddingBottom: 8,
                    paddingTop: 8,
                }
            }}>

            <Tabs.Screen name='index'
                options={{ tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} /> }}
            />
            <Tabs.Screen name='courses'
                options={{ tabBarIcon: ({ size, color }) => <Ionicons name="book" size={size} color={color} /> }}
            />
            <Tabs.Screen name='calendar'
                options={{ tabBarIcon: ({ size, color }) => <Ionicons name="calendar" size={size} color={color} /> }}
            />
            <Tabs.Screen name='profile'
                options={{ tabBarIcon: ({ size, color }) => <Ionicons name="person-circle" size={size} color={color}/> }}
            />
        </Tabs>
    )
}