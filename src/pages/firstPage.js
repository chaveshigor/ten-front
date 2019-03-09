import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

//REDUX
import { connect } from 'react-redux';
import { 
    getLocation, 
    editEmail, 
    editPassword, 
    getToken } from '../redux/actions/authActions';

//CONFIGS
import colors from '../configs/colors';

//STYLES
import styles from '../styles/firstPageStyles';

//COMPONENTS
import TextInput from  '../components/textInput';
import Button from '../components/button';

export class FirstPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    handleLogin = () => {
        this.props.navigation.navigate('teacherLogged')
    }

    handleFacebookLogin = () => {

    }

    handleRegister = () => {
        this.props.navigation.navigate('register')
    }

    render() {

        const { email, password } = this.props

        return(
            <View style={styles.container}>

                <Image
                source={require('../images/logo.png')}
                />
                
                <View style={styles.inputs}>
                    <TextInput
                    icon={<Icon type='simple-line-icon' name='envelope' size={30} color={colors.white}/>}
                    onChangeText={(text) => {this.props.editEmail(text)}}
                    value={email}
                    placeholder='Email'
                    />

                    <TextInput
                    icon={<Icon type='font-awesome' name='lock' size={30} color={colors.white}/>}
                    onChangeText={(text) => {this.props.editPassword(text)}}
                    value={password}
                    placeholder='Senha'
                    secureTextEntry={true}
                    />
                </View>

                <View style={styles.buttons}>
                    <Button
                    text='LOGIN'
                    onPress={this.handleLogin}
                    />

                    <Button
                    text='ENTRAR COM FACEBOOK'
                    onPress={()=>{}}
                    />
                </View>

            <TouchableOpacity onPress={this.handleRegister}>
                <Text style={styles.register}>Ainda não é cadastrado? Clique aqui!</Text>
            </TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = state => ({
    latitude: state.auth.latitude,
    longitude: state.auth.longitude,
    email: state.auth.email,
    password: state.auth.password,
    token: state.auth.token,
});

export default connect(mapStateToProps, 
    { getLocation, editEmail, editPassword, getToken })(FirstPage)