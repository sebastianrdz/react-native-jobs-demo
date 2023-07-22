import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { ScrollView } from "react-native-gesture-handler";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <ScrollView
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          >
            {data.map((job) => {
              return (
                <PopularJobCard
                  key={job?.job_id}
                  job={job}
                  handleCardPress={() =>
                    router.push(`/job-details/${job?.job_id}`)
                  }
                />
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
