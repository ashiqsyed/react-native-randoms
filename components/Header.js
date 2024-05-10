import { Text, View, StyleSheet, Pressable} from "react-native";

const Header = (props) => {
    return (
        <View style={styles.header}>
            {/* <Text style={styles.title}>React Native Randoms</Text> */}
            <Text style={styles.title}>{props.screenName}</Text>
            {/* <Pressable onPress={() => console.log(props.screenName)}><Text>CLICK HERE</Text></Pressable> */}
        </View>
    )
    
}
const styles = StyleSheet.create({
    header: {
        borderWidth: 1,
        width: "100%",
        height: "7%",
      },
      title: {
          fontSize: 32,
          textAlign: "center"
      }
})
export default Header;