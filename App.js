import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './Profile';
import SettingsScreen from './Settings';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import SavedScreen from './Saved';
import ReferScreen from './Refer';
import DrawerItems from './DrawerItems';
// import { Header } from 'react-native-elements';

//tab icons
import home from './assets/home.png';
import search from './assets/search.png';
import notifications from './assets/home.png';
import settings from './assets/bell.png';
import logout from './assets/logout.png';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
          
    <NavigationContainer>
      <Drawer.Navigator 
        drawerType="front"
        initialRouteName="Profile"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}
       
      >
        {
          DrawerItems.map(drawer=><Drawer.Screen 
            key={drawer.name}
            name={drawer.name} 
            options={{
            drawerIcon:({focused})=>
             drawer.iconType==='Material' ? 
              <MaterialCommunityIcons 
                  name={drawer.iconName}
                  size={24} 
                  color={focused ? "#e91e63" : "black"} 
              />
            :
            drawer.iconType==='Feather' ?
              <Feather 
                name={drawer.iconName}
                size={24} 
                color={focused ? "#e91e63" : "black"} 
              /> 
            :
              <FontAwesome5 
                name={drawer.iconName}
                size={24} 
                color={focused ? "#e91e63" : "black"} 
              />
           
             
            }} 
            component={
              drawer.name==='Profile' ? ProfileScreen 
                : drawer.name==='Settings' ? SettingsScreen 
                  : drawer.name==='Saved Items' ? SavedScreen
                    : ReferScreen
            } 
           
          />)
        }
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}