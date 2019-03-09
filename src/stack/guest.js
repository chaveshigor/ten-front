import { createStackNavigator, createAppContainer } from 'react-navigation';

//PAGES
import firstPage from '../pages/firstPage';
import register from '../pages/register';
import registerStudent from '../pages/registerStudent';
import registerTeacher from '../pages/registerTeacher';

const Routes = createStackNavigator({
    
    firstPage: {
        screen: firstPage
    }, 
    
    register: {
        screen: register
    },

    registerStudent: {
        screen: registerStudent
    },

    registerTeacher: {
        screen: registerTeacher
    }
    
})

export default createAppContainer(Routes)