import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ItineraryScreen from '../screens/ItineraryScreen';
import LoginScreen from '../screens/LoginScreen';
import MapScreen from '../screens/MapScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={MapScreen} />
                <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
                <Stack.Screen name="Itinerary" component={ItineraryScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
