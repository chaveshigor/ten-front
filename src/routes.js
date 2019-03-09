import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//PAGES
import guest from './stack/guest';
import teacherLogged from './tab/teacherLogged';
import studentLogged from './tab/studentLogged';

const Routes = createSwitchNavigator({
    guest: {
        screen: guest
    }, 
    
    teacherLogged: {
        screen: teacherLogged
    },

    studentLogged: {
        screen: studentLogged
    }
})

export default createAppContainer(Routes)
