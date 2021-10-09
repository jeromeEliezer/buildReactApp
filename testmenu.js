import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { TouchableOpacity, Image, SafeAreaView, StyleSheet, Text, TouchableOpacityBase, View, Animated } from 'react-native';
import profile from './assets/profile.jpg';
import { NavigationContainer } from '@react-navigation/native';

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
  const [currentTab, setCurrentTab] = useState('');

  // to get the current Status of menu...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  //Scale Initially must be One...
  const scaleValue = useRef(new Animated.Value(0)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>

      <View style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 15,
      }}>
        {
          //Over lay View
        }

        <Animated.View style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width:390,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [
            { scale: scaleValue },
            { translateX: offsetValue }
          ]
        }}>

          {
            // Menu Button...
          }

          <Animated.View style={{
            transform: [{
              translateY: closeButtonOffset
            }]
          }}>

            <TouchableOpacity onPress={() => {
              // Do actions Here...
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true
              })
                .start()

              Animated.timing(offsetValue, {
                // Your Random Value
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true
              })
                .start()
              Animated.timing(closeButtonOffset, {
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true
              })
                .start()

              setShowMenu(!showMenu);
            }}>
              <Image source={showMenu ? close : menu} style={{
                width: 20,
                height: 30,
                tintColor: 'black',
                marginTop: 40,
              }}></Image>
              <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20
              }}>{currentTab}</Text>

              <Image source={photo} style={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 20,

              }}></Image>


            </TouchableOpacity>

            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingTop: 15,
              paddingBottom: 5,

            }}>Jerome Eliezer</Text>

            <Text style={{
              fontWeight: 'bold',
            }}>developer Fullstack js</Text>
          </Animated.View>


        </Animated.View>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 80,
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Jerome Eliezer</Text>

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
          {TabButton(currentTab, setCurrentTab, "Logout", logout)}


        </View>
        <View>

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
        marginTop: 1,
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
    // flex: 1,
    backgroundColor: '#1C93E9',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
