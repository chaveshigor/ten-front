import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

//PAGES
import locateTeacher from '../pages/locateTeacher';
import myTeachers from '../pages/myTeachers';

const Routes = createBottomTabNavigator({
    
    locateTeacher: {
        screen: locateTeacher
    }, 
    
    myTeachers: {
        screen: myTeachers
    }
    
})

export default createAppContainer(Routes)