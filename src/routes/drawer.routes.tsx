import { createDrawerNavigator } from '@react-navigation/drawer';
import { ContentPage } from '../components/ContentPage';

import WhatIsReactNative from '../screens/WhatIsReactNative';
import Characteristics from '../screens/Characteristics';
import Advantages from '../screens/Advantages';
import Disadvantages from '../screens/Disadvantages';
import { Splash } from '../Splash';
import Group from '../screens/Group';

const { Navigator, Screen } = createDrawerNavigator();

const ROUTES = [
  {
    name: 'O que é React Native?',
    ...WhatIsReactNative
  },
  {
    name: 'Características',
    ...Characteristics
  },
  {
    name: 'Vantagens',
    ...Advantages
  },
  {
    name: 'Desvantagens',
    ...Disadvantages
  },
  {
    name: 'Grupo',
    ...Group
  }
]

export function DrawerRoutes() {  
  return (
    <Navigator>
      <Screen component={Splash} name=" " options={{ headerShown: false }}/>

      {ROUTES.map(({ name, logo, title, contents }, index) => (
        <Screen name={name} options={{headerTitle: ''}}>
            {() => (
            <ContentPage
              key={index}  
              logo={logo} 
              title={title} 
              contents={contents} 
            />
          )}
        </Screen>
      ))}
    </Navigator>  
  );
}