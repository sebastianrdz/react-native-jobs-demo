import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      >
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            name={tab}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(tab)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Tabs;
