import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';

//CONFIGS
import colors from '../configs/colors';

export default class Date extends React.Component {
    render(){

        const { placeholder, onDateChange, date } = this.props

        return(
            <View style={styles.container}>
                <View style={styles.iconView}>
                    <Icon
                    type='antdesign'
                    name='calendar'
                    size={30}
                    color={colors.white}
                    />
                </View>

                <DatePicker
                    style={{width: 250, marginLeft: 4}}
                    date={date}
                    mode="date"
                    placeholder={placeholder}
                    format="YYYY-MM-DD"
                    minDate="1919-02-16"
                    maxDate="2001-02-16"
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    showIcon={false}
                    onDateChange={onDateChange}
                    customStyles={{
                        dateInput: {
                            alignItems: 'flex-start',
                            borderColor: 'transparent'
                        },
                        dateText: {
                            color: colors.white,
                            fontSize: 16
                        },
                        placeholderText: {
                        color: 'grey',
                        fontSize: 16
                        }
                        }}
                />

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
    }

})


