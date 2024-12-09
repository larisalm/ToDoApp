import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from './src/screens/TaskListScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import EditTaskScreen from './src/screens/EditTaskScreen';
import LoadingScreen from './src/screens/LoadingScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoadingScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize: 20, 
            textAlign: 'center', 
          },
        }}
      >
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ title: 'Cargando...' }}
        />
        <Stack.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{ title: 'Mis Tareas...' }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ title: 'Agregar Tarea' }}
        />
        <Stack.Screen
          name="EditTask"
          component={EditTaskScreen}
          options={{ title: 'Editar Tarea' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
