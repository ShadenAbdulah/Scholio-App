import { COLORS } from "@/constants/theme";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import * as Progress from 'react-native-progress';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export type Card = {
  id: string;
  courseName: string;
  tasks: number;
  lecutrer: string;
  grade: number;
};

const CARD_WIDTH = SCREEN_WIDTH * 0.8;
const CARD_SPACING = (SCREEN_WIDTH - CARD_WIDTH) / 2;

export const CardSliderContent = ({
  data,
  onPressCard,
}: {
  data: Card[];
  onPressCard?: (item: Card) => void;
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatRef = useRef<FlatList<Card> | null>(null);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index ?? 0);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderItem = ({ item, index }: ListRenderItemInfo<Card>) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: "clamp",
    });

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [50, 0, 50],
      extrapolate: "clamp",
    });

    return (
      <View
        style={{ width: CARD_WIDTH}}
      >
        <Animated.View
          style={{
            transform: [{ scale }, { translateY }],
            width: "100%",
            borderRadius: 5,
            overflow: "hidden",
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 5 },
          }}
        >
          <TouchableOpacity className="w-full p-5 bg-[#ebf1f8] flex-col gap-10"
            onPress={() => onPressCard && onPressCard(item)}>
            <Text className="font-bold text-2xl">
              {item.courseName}
            </Text>

            <View className="flex-row justify-between w-3/4">
              <Text className="font-bold text-xl">Tasks</Text>
              <Text className="font-regular text-xl">{item.tasks}</Text>
            </View>

            <View className="flex-row justify-between w-3/4">
              <Text className="font-bold text-xl">Lecturer</Text>
              <Text className="font-regular text-xl">{item.lecutrer}</Text>
            </View>

            <View className="flex-row w-full justify-between gap-6">
              <Text className="font-bold text-xl">Grade</Text>
              <View className="flex-1 relative justify-center">
                <Progress.Bar
                  height={Dimensions.get("window").height * 0.03}
                  progress={item.grade/100}
                  width={SCREEN_WIDTH * 0.55}
                  color={COLORS.primary}
                  unfilledColor={COLORS.grey}   
                  borderWidth={0}
                />
                <Text className="absolute self-center text-white font-bold text-md">
                  {item.grade}%
                </Text>
              </View>
            </View>

          </TouchableOpacity>

        </Animated.View>
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 0 }}>
      <Animated.FlatList
        ref={flatRef}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{ paddingHorizontal: 0 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={renderItem}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
        {data.map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <View
              key={`dot-${i}`}
              style={{
                width: isActive ? 20 : 10,
                height: 6,
                borderRadius: 6,
                backgroundColor: isActive ? COLORS.primary : COLORS.secondary,
                marginHorizontal: 4,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

// defaultData.ts
export const defaultData: Card[] = [
  { id: "1", courseName: "Mathematics", tasks: 0, lecutrer: "Dr. John Joe", grade: 70 },
  { id: "2", courseName: "Physics", tasks: 5, lecutrer: "Phd. Alex Dan", grade: 10 },
  { id: "3", courseName: "Computer Science", tasks: 2, lecutrer: "T. Adam Vany", grade: 100 },
];
