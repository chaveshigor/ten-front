import { StyleSheet, Platform } from 'react-native';

import colors from '../configs/colors';
import fontSize from '../configs/fonts';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.mainBg
    },

    messageTop: {
        fontSize: fontSize.title,
        color: colors.white,
        marginTop: Platform.OS === 'ios' ? 20 : 0
    },

    div: {
        marginTop: 5,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputs: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    twoChoices: {
        color: colors.white,
        fontSize: fontSize.big,
        marginTop: 10
    },

    button: {
        marginVertical: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default styles