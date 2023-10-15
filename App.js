import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/Home';
import SavedItem from './screens/SavedItem';
import Search from './screens/Search';
import Collections from './screens/Collections';
import Categories from './screens/Categories';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#20C065',
        tabBarInactiveTintColor: '#A8A8A8',
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          display: 'flex',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 24, height: 24 }} source={require('./assets/iconhome.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Collections"
        component={Categories} 
        options={{
          tabBarLabel: 'Collections',
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 24, height: 24 }} source={require('./assets/iconcollection.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="SavedItem"
        component={SavedItem}
        options={{
          tabBarLabel: 'SavedItem',
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 24, height: 24 }} source={require('./assets/iconsaved.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 24, height: 24 }} source={require('./assets/iconsearch.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTab" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTab" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
