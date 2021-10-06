import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, Image, SafeAreaView, StyleSheet, Text, TouchableOpacityBase, View } from 'react-native';
import profile from './assets/profile.jpg';
//tab icons
import home from './assets/home.png';
import search from './assets/search.png';
import notifications from './assets/home.png';
import settings from './assets/bell.png';
import logout from './assets/logout.png';
//Menu
import menu from './assets/menu.png';
import close from './assets/cancel.png';

//Photo
import photo from './assets/photo.jpg';




export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');
  return (
    <SafeAreaView style={styles.container}>

      <View style={{
        justifyContent: 'flex-start',
        padding: 15
      }}>
    {
      //Over lay View
    }

      <View style={{
      flexGrow: 1,
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal:15,
      paddingVertical: 20,

    }}>

    {
      // Menu Button...
    }

      <TouchableOpacity>
      <Image source={menu} style={{
        width:20,
        height:20,
        tintColor:'black', 
        marginTop:40,
      }}></Image>
      <Text style={{
        fontSize:30,
        fontWeight: 'bold',
        color:'black',
        paddingTop:20
      }}>{currentTab}</Text>

      <Image></Image>
      </TouchableOpacity>

      </View>
      <Image source={profile} style={{
      width: 60,
      height: 60,
      borderRadius: 10,
      marginTop: 8,
    }}></Image>

      <text style={{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 20
    }}>Jerome Eliezer</text>

      <TouchableOpacity>
      <Text style={{
      marginTop: 6,
      color: 'white'
    }}>View Profile</Text>
      </TouchableOpacity>
      <View style={{ flexGrow: 1, marginTop: 50 }}>
    {
      // tab Bar Buttons...
    }
    {TabButton(currentTab, setCurrentTab, "home", home)}
    {TabButton(currentTab, setCurrentTab, "Search", search)}
    {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
    {TabButton(currentTab, setCurrentTab, "Settings", settings)}


      </View>
      <View>
    {TabButton(currentTab, setCurrentTab, "Logout", logout)}

      </View>
      </View>
    </SafeAreaView>
  );
}

// for multiple buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == 'Logout') {
        //do your Stuff
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15,
      }}>
        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image >

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C93E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
