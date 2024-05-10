import { StyleSheet, Text, View } from "react-native";
import TestComponent from "../components/TestComponent";
import { Link } from "expo-router";
import Header from "../components/Header";
export default function Page() {
  return (
    <View style={styles.container}>
      <Header screenName="React Native Randoms"/>
      <View>
          <Link href="/counter/CounterScreen">Counter</Link>
      </View>
      <TestComponent test="test prop"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // padding: 24,
    // borderWidth: 1
  },
  
});
