import {Text, View, StyleSheet} from "react-native";

export default function GroceryItem({title}) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        justifyContent: "center",
        backgroundColor: "#CC9767",
        paddingVertical: 30,
        paddingLeft: 20,
        marginBottom: 10,
        borderRadius: 15
    },
    text: {
        color: "#fff"
    }
})