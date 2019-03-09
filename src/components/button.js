import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity, 
    TouchableNativeFeedback, 
    StyleSheet,
    Platform
} from 'react-native';

//CONFIGS
import colors from '../configs/colors';
import fontSize from '../configs/fonts';

export default class Button extends React.Component {
    
    androidButon = (onPress, text, width) => (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.container, {width: width}]}>
                <Text style={styles.textButton}>{text}</Text>
            </View>
        </TouchableNativeFeedback>
    )

    iosButton = (onPress, text, width) => (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, {width: width}]}>
                <Text style={styles.textButton}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
    
    render() {

        const { onPress, text, width='80%' } = this.props

        return(
            <View style={styles.first}>
                {Platform.OS === 'ios' ?
                this.iosButton(onPress, text, width) : 
                this.androidButon(onPress, text, width)}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    first: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },

    container: {
        width:'80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.baseGray,
        borderRadius: 25
    },

    textButton: {
        color: colors.baseGray,
        fontSize: fontSize.big,
        fontWeight: 'bold',
        marginVertical: 10
    }

})