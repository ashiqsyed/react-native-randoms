import { Text, View, StyleSheet, Pressable} from "react-native";
import { router } from "expo-router";
import Counter from "../../components/Counter";

export default function CounterScreen() {
    return (
        <View style={styles.counterScreen}>
            <View style={styles.counterHeader}>
                <Pressable onPress={() => router.push("/")} ><Text style={styles.back}>Back</Text></Pressable>
                <Text style={styles.counterTitle}>Counter</Text>
            </View>
            <Counter />
        </View>
    )
};

const styles = StyleSheet.create({
    counterScreen: {
      flex: 1,
      alignItems: "center",
    //   borderWidth: 1,
    //   backgroundColor: "lightgray",
      
    },
    counterHeader: {
        flex: 0.05,
        // borderWidth: 1,
        width: "100%",
        height: "7%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    back: {
        fontSize: 32,
        marginTop: 5,
        marginLeft: 5
    },
    counterTitle: {
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 5,
        marginRight: 5
    }
    
  });