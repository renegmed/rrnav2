import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class TopLevelScreen extends Component {
    static options(passProps) {
        return {
            statusBar: {
                visible: false,
                style: 'light' | 'dark'
              },
              layout: {
                backgroundColor: 'white',
                orientation: ['portrait', 'landscape'] // An array of supported orientations
              },
              modalPresentationStyle: 'overCurrentContext', // Supported styles are: 'formSheet', 'pageSheet', 'overFullScreen', 'overCurrentContext', 'currentContext', 'popOver', 'fullScreen' and 'none'. On Android, only overCurrentContext and none are supported.
              topBar: {
                visible: true,
                animate: false, // Controls whether TopBar visibility changes should be animated
                hideOnScroll: true,
                buttonColor: 'black',
                drawBehind: false,
                testID: 'topBar',
                title: {
                  text: 'Title',
                  fontSize: 14,
                  color: 'red',
                  fontFamily: 'Helvetica',
                  component: {
                    name: 'example.CustomTopBarTitle',
                    alignment: 'center'
                  }
                },
                subtitle: {
                  text: 'Title',
                  fontSize: 14,
                  color: 'red',
                  fontFamily: 'Helvetica',
                  alignment: 'center'
                },
                backButton: {
                  icon: require('../images/signup.png'),
                  visible: true
                },
                background: {
                  color: '#00ff00',
                  component: {
                    name: 'example.CustomTopBarBackground'
                  }
                }
              },
              bottomTabs: {
                visible: true,
                animate: false, // Controls whether BottomTabs visibility changes should be animated
                currentTabIndex: 0,
                currentTabId: 'currentTabId',
                testID: 'bottomTabsTestID',
                drawBehind: false,
                backgroundColor: 'white'
              },
              bottomTab: {
                text: 'Tab 1',
                badge: '2',
                badgeColor: 'red',
                testID: 'bottomTabTestID',
                icon: require('../images/signin.png'),
                iconColor: 'red',
                selectedIconColor: 'blue',
                textColor: 'red',
                selectedTextColor: 'blue',
                fontFamily: 'Helvetica',
                fontSize: 10
              },
              sideMenu: {
                left: {
                  width: 260,
                  height: 270,
                  visible: false,
                  enabled: true
                },
                right: {
                  width: 260,
                  height: 270,
                  visible: false,
                  enabled: true
                }
              },
              overlay: {
                interceptTouchOutside: true
              },
              preview: {
                reactTag: 0, // result from findNodeHandle(ref)
                width: 100,
                height: 100,
                commit: false,
                actions: [{
                  id: 'ActionId1',
                  title: 'Action title',
                  style: 'selected', // default, selected, destructive,
                  actions: [/* ... */]
                }]
              }  
        }
    }

    /*
        One thing to note is how we call the Navigation.pop function to go back. 
        This is again different from the old API that used props 
        (this.props.navigator.pop) vs in V2 we’re using the imported 
        Navigation API from React Native Navigation  
    */
    render() {
        return (
            <View style={styles.container}>
                <Text>Top Level</Text>
                <Button
                    onPress={() => Navigation.pop(this.props.componentId)}
                    title="Go Back"
                />
            </View>
        )
       
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
