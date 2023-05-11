import React from 'react';
import MainToDo from '../ToDoST/MainToDo';
import Home from '../School/Home';
import MySelf from '../MySelf/MySelf';
import TruongHoc from '../TruongHoc/TruongHoc';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
const Tab = createBottomTabNavigator();

const NavigatiorTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainToDo"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Trang Chủ"
        component={MainToDo}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 30, width: 30}}
              source={require('../../../assets/ToDo/ItemTabBar/item.png')}
              resizeMode="cover"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trường Học"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 30, width: 30}}
              source={require('../../../assets/ToDo/ItemTabBar/school.png')}
              resizeMode="cover"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tự Học"
        component={MySelf}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 30, width: 30}}
              source={require('../../../assets/ToDo/ItemTabBar/tuhoc.png')}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="School"
        component={TruongHoc}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 30, width: 30}}
              source={require('../../../assets/ToDo/ItemTabBar/school.png')}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigatiorTabBar;
