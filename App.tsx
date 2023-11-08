import React from "react";
import { Text, View, GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './src/screens/Home';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home />
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}


export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconSize = size; // Default icon size

              if (route.name === 'Home') {
                iconName = focused
                  ? 'chatbubble-ellipses'
                  : 'chatbubble-ellipses-outline';
              } else if (route.name === 'Profile') {
                iconName = focused
                  ? 'person-circle'
                  : 'person-circle-outline';
              } else if (route.name === 'Search') {
                iconName = focused
                  ? 'search'
                  : 'search-outline';
              }

              return <Ionicons name={iconName} size={iconSize} color={color} />;
            },
            tabBarActiveTintColor: config.tokens.colors.blue500,
            tabBarInactiveTintColor: 'grey',
            tabBarLabel: () => null
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
          />

          <Tab.Screen
            name="Search"
            component={SearchScreen} />

          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
