import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

//CONFIGS
import colors from '../configs/colors';
import fontSize from '../configs/fonts';

export default class Input extends React.Component {
    
    render() {

        const { 
            onChangeText, 
            value, 
            icon, 
            placeholder='', 
            placeholderTextColor='grey',
            width='80%',
            secureTextEntry=false
         } = this.props

        return(
            <View style={[styles.container, {width:width}]}>
                <View style={styles.iconView}>
                    {icon}
                </View>

                <View style={styles.textInputView}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={onChangeText}
                        value={value}
                        autoCorrect={false}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderTextColor}
                        secureTextEntry={secureTextEntry}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 5
    },

    iconView: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInputView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    textInput: {
        color: colors.white,
        fontSize: fontSize.normal,
    }

})