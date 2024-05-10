import { Text, View } from "react-native";

const TestComponent = (props) => {
    return (
        <View>
            <Text>This is TestComponent. prop.test is {props.test}</Text>
        </View>
    )
}

export default TestComponent;