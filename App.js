// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./pages/HomeScreen";

const Stack = createNativeStackNavigator();

const stackOptions = {
    defaultConfig: {
        title: 'Grocery List',
        headerStyle: {
            backgroundColor: '#CC9767',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'light',
        },
    },
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Grocery List">
                <Stack.Screen name="Grocery List" component={HomeScreen} options={stackOptions.defaultConfig}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;