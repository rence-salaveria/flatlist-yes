import {Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import GroceryItem from "../components/GroceryItem";
import Button from "../components/Button";
import FloatingActionButton from "../components/FloatingActionButton";

export default function HomeScreen() {
    const groceryItems = [
        {id: 1, title: "Milk"},
        {id: 2, title: "Eggs"},
        {id: 3, title: "Bread"},
        {id: 4, title: "Butter"},
        {id: 5, title: "Cheese"},
        {id: 6, title: "Apples"},
    ]

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={groceryItems}
                    renderItem={({item}) => (
                        <GroceryItem title={item.title}/>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{
                position: "absolute",
                bottom: 0,
            }}>
                <FloatingActionButton title="+" onPress={() => console.log("Hello")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    item: {
        backgroundColor: "#8c6a47",
        padding: 15,
        marginBottom: 10,
        borderRadius: 10
    }
})
