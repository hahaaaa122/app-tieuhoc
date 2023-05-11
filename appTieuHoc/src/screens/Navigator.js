import React from 'react';
import Main from './Main';
import Register from './Register';
import NavigatiorTabBar from './ToDo/NavigaterTabBar/NavigatiorTabBar';
import Pack from './ToDo/ToDoST/Pack';
import Information from './ToDo/ToDoST/Information';
import EditAC from './ToDo/ToDoST/EditAC';
import Sp from './ToDo/ToDoST/Sp';
import MathToDo from './ToDo/School/MathToDo';
import Study from './ToDo/School/Study';
import ListItem from './ToDo/School/ListLesson/ListItem';
import LuyenTap from './ToDo/School/ToDo/LuyenTap';
import FinishedLesson from './ToDo/School/ToDo/finishedLesson/FinishedLesson';
import HtmlData from './ToDo/School/ToDo/HTML/HtmlData';
import Home from './ToDo/School/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import Redux from '../screens/ToDo/School/ToDo/Redux/store';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <Provider store={Redux.store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Pack" component={Pack} />
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="EditAC" component={EditAC} />
          <Stack.Screen name="Sp" component={Sp} />
          <Stack.Screen name="MathToDo" component={MathToDo} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Study" component={Study} />
          <Stack.Screen name="NavigatiorTabBar" component={NavigatiorTabBar} />
          <Stack.Screen name="ListItem" component={ListItem} />
          <Stack.Screen name="LuyenTap" component={LuyenTap} />
          <Stack.Screen name="FinishedLesson" component={FinishedLesson} />
          <Stack.Screen name="HtmlData" component={HtmlData} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigator;
