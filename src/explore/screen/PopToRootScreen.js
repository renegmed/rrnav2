import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class PopToRootScreen extends Component {

    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: 'Pop To Root'
                }
            }
        }
    }

    
    render() {
        return (
            <View style={styles.container}>
                <Text>Pop To Root Screen</Text>
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
