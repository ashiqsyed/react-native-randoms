import { Text, View, StyleSheet, Pressable } from "react-native"
import {useState} from 'react'
const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }
    const handleZero = () => {
        setCount(0);
    }
    const handleDecrement = () => {
        if (count !== 0) {
            setCount(prevCount => prevCount - 1);
        } else {
            alert("You cannot go lower than zero.")
        }
    }
    return (
        <View style={styles.counterContainer}>
            <View style={styles.counterInfoContainer}>
                <View style={styles.counterInfo}>
                    <Text style={styles.counterText}>You have clicked</Text>
                    <Text style={styles.count}>{count}</Text>
                    <Text style={styles.counterText}>times.</Text>
                </View>
            </View>
            
            <View style={styles.buttonContainer}>
                <View style={styles.buttons}>
                    <Pressable onPress={handleIncrement} style={styles.increment}><Text style={styles.incrementText}>Increment</Text></Pressable>
                    <Pressable onPress={handleZero} style={styles.zero}><Text style={styles.zeroText}>Zero</Text></Pressable>
                    <Pressable onPress={handleDecrement} style={styles.decrement}><Text style={styles.decrementText}>Decrement</Text></Pressable>
                </View>
                

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    counterContainer: {
        // borderWidth: 1,
        width: "100%",
        flex: 0.95,
        
    },
    counterInfoContainer: {
        // borderWidth: 1,
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    counterInfo: {
        width: "50%",
        height: "35%",
        justifyContent: "center",
        alignItems: "center",
    },
    counterText: {
        fontSize: 24,
    },
    count: {
        fontSize: 72
    },
    buttonContainer: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttons: {
        width: "50%",
        height: "70%",
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    increment: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "blue"
    },
    incrementText: {
        fontSize: 28,
        color: "blue"
    },
    zero: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    zeroText: {
        fontSize: 28
    },
    decrement: {
        borderWidth: 1,
        padding: 10,
        borderColor: "red",
        borderRadius: 10
    },
    decrementText: {
        fontSize: 28,
        color: "red"
    }
});
export default Counter;