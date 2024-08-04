import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="flex-1 font-pregular text-base text-white mt-1.5"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#cdcde0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity onPress={() => {
        if (!query) {
          return Alert.alert("Missing query", "Please enter a query to search for videos");
        }

        if (pathname.startsWith("/search")) router.setParams({ query });
        else router.push(`/search/${query}`);
      }}>
        <Image
          source={icons.search}
          resizeMode="contain"
          className="w-5 h-5"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
