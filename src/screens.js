import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('Home', () => require('./Home').default);
    Navigation.registerComponent('Initializing', (sc) => require('./Initializing').default);
    Navigation.registerComponent('SignIn', () => require('./SignIn').default);
    Navigation.registerComponent('SignUp', () => require('./SignUp').default);
    Navigation.registerComponent('Screen2', () => require('./Screen2').default);

    Navigation.registerComponent('Lifecycle', () => require('./explore/LifecycleScreen').default);
    Navigation.registerComponent('Toplevel', () => require('./explore/TopLevelScreen').default); 
    
    Navigation.registerComponent('example.FirstTabScreen', () => require('./explore/FirstTabScreen').default);
    Navigation.registerComponent('navigation.playground.TextScreen', () => require('./explore/TextScreen').default);  
    

    Navigation.registerComponent('example.screens.MainScreen', () => require('./explore/screen/MainScreen').default); 
    Navigation.registerComponent('example.screens.PushScreen', () => require('./explore/screen/PushScreen').default);
    Navigation.registerComponent('example.screens.PopScreen', () => require('./explore/screen/PopScreen').default);
    Navigation.registerComponent('example.screens.PopToRootScreen', () => require('./explore/screen/PopToRootScreen').default);

    
    Navigation.registerComponent('example.CustomTopBarBackground', () => require('./explore/TextScreen').default); 
    Navigation.registerComponent('example.CustomTopBarTitle', () => require('./explore/TextScreen').default); 
}