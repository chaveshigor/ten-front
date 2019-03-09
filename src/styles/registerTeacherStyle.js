import { StyleSheet, Platform } from 'react-native';

import fontSize from '../configs/fonts';
import colors from '../configs/colors';

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

    myPublic: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: fontSize.big,
        color: colors.white
    },

    options: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },

    button: {
        marginVertical: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default styles