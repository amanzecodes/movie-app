import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: Movie) => {

  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <View className="w-full h-52 rounded-lg bg-[#1a1a1a] overflow-hidden justify-center items-center">
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#1a1a1a",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {poster_path ? (
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
                }}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <Image
                source={require("../assets/images/bg.png")}
                style={{ width: 40, height: 40, opacity: 0.5 }}
              />
            )}
          </View>
        </View>
        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>{title}</Text>
        <View className="flex-row items-center justify-start gap-x-1">
            <Image source={icons.star} className="w-4 h-4" />
            <Text className="text-white font-bold uppercase">{Math.round(vote_average / 2)}</Text>
        </View>
        <View className="flex-row items-center justify-between">
            <Text className="text-xs text-light-300 font-medium">
              {release_date?.split("-")[0]}
            </Text>
            {/* <Text className="text-xs font-medium text-light-300 uppercase p-1">Movie</Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
