import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import colors from '../configs/colors';
import fontSize from '../configs/fonts';

export default class CheckBox extends React.Component {
      
    render(){

        const { option, isSelected=false, onPress } = this.props

        return(
            <View>
                <TouchableOpacity style={styles.container} onPress={onPress}>
                    {isSelected === true ? 
                    <Icon type='material-community' name='checkbox-marked-outline' size={30} color={colors.green}/> : 
                    <Icon type='material-community' name='checkbox-blank-outline' size={30} color={colors.white}/>
                    }
                    <Text style={styles.text}>{option}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        color: colors.white,
        fontSize: fontSize.normal,
        marginLeft: 5
    }

})