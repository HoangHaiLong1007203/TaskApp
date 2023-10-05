import React from 'react';
import {TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Screen1 from './screen1';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#A58EFF',  // Màu của nút khi được chọn
      tabBarInactiveTintColor: 'gray',  // Màu của nút khi không được chọn
      tabBarShowLabel: false,  // Không hiển thị tên chữ
      headerShown: false,  // Không hiển thị tiêu đề
      tabBarStyle: {
        backgroundColor: '#FCFCFC',  // Màu nền của thanh tab bar
      },
    }}
  >
    <Tab.Screen name="Screen1" component={Screen1}
      options={{ tabBarIcon: ({ color, size }) => (
        <Icon name="list" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Heart" component={() => null}
      options={{ tabBarIcon: ({ color, size }) => (
          <Icon name="heart" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Plus"  component={() => null}
      options={{ tabBarIcon: ({ color, size }) => (
          <Icon name="plus" size={size} color={color} />
        ),
        tabBarButton: (props) => (
          <TouchableOpacity {...props} style={{ backgroundColor: '#A58EFF',borderRadius:30, top:-20,width:45}} />
        ),
      }}
    />
    <Tab.Screen name="Chat" component={() => null}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="comment-o" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Profile" component={() => null}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="user-o" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
