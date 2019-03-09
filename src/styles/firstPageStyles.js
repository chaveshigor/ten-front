import { StyleSheet } from 'react-native';

//CONFIGS
import colors from '../configs/colors';
import fontSize from '../configs/fonts';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.mainBg,
        justifyContent: 'center',
        alignItems: 'center' 
    },

    inputs: {
        marginTop: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center' 
    },

    buttons: {
        marginTop: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center' 
    },

    register: {
        fontSize: fontSize.small,
        color: colors.white,
        marginTop: 40
    }

})

export default styles