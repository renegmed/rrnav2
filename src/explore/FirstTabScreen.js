import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class FirstTabScreen extends Component {
    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: 'First Tab'
                }
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
                <Text>First Tab</Text>
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
