import React from 'react';
import { View, Text } from 'react-native';

//REDUX
import { connect } from 'react-redux';


export class RegisterStudent extends React.Component {
    render() {
        return(
            <View>
                <Text>Registrar aluno</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(RegisterStudent)