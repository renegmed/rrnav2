import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native' 
import { Navigation } from 'react-native-navigation' 

export default class MainScreen extends Component {
    
    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: 'Main Screen'
                },
            }
        };
    } 
    
    render() {
        return (
             <View style={styles.container}>
                <Text> Learn About Screens </Text> 
                <Button onPress={ () => {
                    Navigation.push(this.props.componentId, {
                        component: {
                            name: 'example.screens.PushScreen',
                        }
                    })  
                }} title="Push Screen" />

                <Button onPress={ () => {
                    Navigation.push(this.props.componentId, {
                        component: {
                            name: 'example.screens.PopScreen',
                        }
                    }) 
                }} title="Pop Screen" />
                
               
                <Button onPress={ () => {
                    Navigation.push(this.props.componentId, {
                        component: {
                            name: 'example.screens.PopToRootScreen',
                        }
                    }) 
                }} title="Pop To Root" />
                
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