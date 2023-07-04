import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.fJUTrJgu}></View><Text style={styles.rsQcflgJ}>{"Mithilesh testing app"}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  fJUTrJgu: {
    height: 100,
    width: 200,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    left: 80,
    top: 100,
    transform: [{
      rotate: "90deg"
    }]
  },
  rsQcflgJ: {
    width: 200,
    height: 100,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    fontFamily: "Merriweather"
  }
});
export default Untitled2;