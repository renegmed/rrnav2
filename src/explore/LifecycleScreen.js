import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { View, Text, StyleSheet } from 'react-native';

export default class LifecycleScreen extends Component {

    /*

        The componentDidAppear and componentDidDisappear functions are 
        special React Native Navigation lifecycle callbacks that are 
        called on the component when it appears and disappears (after it 
        was bounded using Navigation.events().bindComponent(this)). 
    
    */
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
        this.state = {
            text: 'nothing yet'
        };
    }
  
    componentDidAppear() {
      this.setState({ text: 'componentDidAppear' });
      alert('LifecycleScreen componentDidAppear');
    }
  
    componentDidDisappear() {
      alert('LifecycleScreen componentDidDisappear');
    }
  
    navigationButtonPressed({buttonId}) {
      // a navigation-based button (for example in the topBar) was clicked. See section on buttons.
      alert('LifecycleScreen navigationButtonPressed');
    }
  
    componentWillUnmount() {
      alert('LifecycleScreen componentWillUnmount');
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.h1}>{`Lifecycle Screen`}</Text>
          <Text style={styles.h1}>{this.state.text}</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: { 
        fontSize: 18,
        fontWeight: '500', 
        backgroundColor: 'white', 
        padding: 8, 
      },
  })