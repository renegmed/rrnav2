import { Navigation } from 'react-native-navigation'
/*
goToAuth — This function sets our root route stack to a 
bottomTabs route configuration. Each tab is a component, 
with a name and some options configured.

goHome — This sets the route stack to a stack navigation, 
passing in a single component to the children array: the Home component.

*/
export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: 'SignIn',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Sign In',
                                icon: require('./images/signin.png')
                            }
                        }
                    },  
                },      
                {       
                    component: {
                        name: 'SignUp',
                        options: {
                            bottomTab: {
                                text: 'Sign Up',
                                fontSize: 12,
                                icon: require('./images/signup.png')
                            }
                        }
                    },
                },
            ],
        }
      }
}); 

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Home',
                    }
                }
            ],
        }
    }
});

export const goTopLevel = () => Navigation.setRoot({
    root: {
        bottomTabs: {
          children: [{
            stack: {
              children: [{
                component: {
                  name: 'example.FirstTabScreen',
                  passProps: {
                    text: 'This is tab 1'
                  }
                }
              }],
              options: {
                bottomTab: {
                  text: 'Tab 1',
                  icon: require('./images/signin.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON'
                }
              }
            }
          },
          {
            component: {
              name: 'navigation.playground.TextScreen',
              passProps: {
                text: 'This is tab 2'
              },
              options: {
                bottomTab: {
                  text: 'Tab 2',
                  icon: require('./images/signup.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON'
                }
              }
            }
          }]
        }
      }

});