import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons"; // or lucide-react-native if you prefer
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

const SearchBar: React.FC<{
  placeholder?: string;
  onSearch: (query: string) => void;
}> = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query.trim());
  };

  return (
    <View className="flex-row items-center bg-[#ebf1f8]/40 rounded-2xl px-3 py-2">
      {/* Search Icon */}
      <Ionicons name="search" size={20} color={COLORS.primary} />

      {/* Input Field */}
      <TextInput
        className="flex-1 px-2 text-base text-gray-700"
        placeholder={placeholder}
        value={query}
        onChangeText={setQuery}
        returnKeyType="search"
        onSubmitEditing={handleSearch}

      />

      {/* Clear Button */}
      {query.length > 0 && (
        <TouchableOpacity onPress={() => setQuery("")}>
          <Ionicons name="close-circle" size={20} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
