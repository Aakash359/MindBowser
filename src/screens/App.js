/**
 * @Assignment_Of_MindBowser_Submitted_By_Aakash_Verma on 8/2/21
 */

import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, } from '@react-navigation/stack';
import { NavigationContainer,} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Favourite from './Favourite';
import SideMenu  from './SideMenu';
import DetailView from './DetailView';




const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();
 
function MyTabs({navigation}) {
  return (
    <Tab.Navigator 
    tabBarOptions={{activeTintColor:"black",inactiveTintColor:"#cccccc",
    }}
    
    
    >
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon: ({ color, size}) => (
          <Icon name="home" size={size} color= {color}
          style={{alignSelf:'center'}}
          />
        )
      }}
      />

        <Tab.Screen name="Favourite" component={Favourite}
         
            options={{
              tabBarIcon: ({ color, size}) => (
                <Icon name="heart" size={size} color= {color}
                style={{alignSelf:'center'}}
                />
              ),
            }}/>
   
   </Tab.Navigator>
  );
}

function MyDrawer() {


  return (
          <Drawer.Navigator
              initialRouteName="Root"
              drawerStyle={{
                flex: 1,
                width: '89%',
                backgroundColor: 'transparent'
              }}
              contentcontainerstyle={{ flex: 1 }}
             
              drawerContent={props => {return <SideMenu {...props} />;
              }}>
              <Drawer.Screen name="Root"
               >
                  {
                  props => <MyTabs {...props}
                />}
              </Drawer.Screen>
              
            

          </Drawer.Navigator>

  );
}

export default function App() {

  return (
    <NavigationContainer>
  <RootStack.Navigator mode="modal">

      <RootStack.Screen
        name="Main"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
       
    <RootStack.Screen name="DetailView" component={DetailView} />
   
    </RootStack.Navigator>
      

    </NavigationContainer>
  );
}

