import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

//PAGES
import locateStudents from '../pages/locateStudent';
import myStudents from '../pages/myStudents';

const Routes = createBottomTabNavigator({
    
    locateStudents: {
        screen: locateStudents
    }, 
    
    myStudents: {
        screen: myStudents
    }
    
})

export default createAppContainer(Routes)