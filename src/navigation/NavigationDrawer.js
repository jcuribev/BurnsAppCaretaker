import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { drawerItems } from './DrawerItemsMain';
import CustomDrawer from './CustomDrawer';
import About from '../pages/About';
import References from '../pages/References';
import PagesOfInterest from '../pages/PagesOfInterest';
import Definition from '../pages/home/Definition';
import ControlAndFollowUp from '../pages/ControlAndFollowUp';
import Functional from '../pages/complications/Functional';
import Aesthetic from '../pages/complications/Aesthetic';
import Recommendations from '../pages/Recommendations';

const Map = {
  "Home": "Home",
  "Complications": "Complications",
  "ControlAndFollowUp": ControlAndFollowUp,
  "References": References,
  "PagesOfInterest": PagesOfInterest,
  "About": About,
  "Definition": Definition,
  "Functional": Functional,
  "Aesthetic": Aesthetic,
  "Recommendations": Recommendations
}

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer drawerItems={drawerItems} {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ebebeb",
        },
        drawerActiveBackgroundColor: "blue",
        drawerActiveTintColor: "white"
      }}
    >
      {
        drawerItems.map((item) => {
          return (
            <Drawer.Screen key={item.key} name={item.title} component={Map[item.key]}/>
          )
        })
      }
    </Drawer.Navigator>
  )
}

export default NavigationDrawer