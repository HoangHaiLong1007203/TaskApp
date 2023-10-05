import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/home';
import Screen2 from './screen/screen2';
import Screen3 from './screen/screen3';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} // Ẩn thanh tiêu đề trên màn hình S1
        />
        <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Next to you', // Đặt tiêu đề của thanh tiêu đề là 'Next to you'
            headerTitleAlign: 'center', // Căn giữa tiêu đề
            headerStyle: { 
                backgroundColor: '#FCFCFC', // Sử dụng mã màu ưa thích của bạn
            },
        }} 
        />
        <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} // Ẩn thanh tiêu đề trên màn hình S1
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

