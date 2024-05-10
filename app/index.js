import { StyleSheet, Text, View } from "react-native";
import TestComponent from "../components/TestComponent";
import { Link } from "expo-router";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Page() {
  return (
    // <SafeAreaView style={styles.container}>
    // {/* </SafeAreaView> */}
    <View style={styles.container}>
      <Header screenName="React Native Randoms"/>
      <View>
          <Link href="/counter/CounterScreen">Counter</Link>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#8497b5"
  },
  
});
