import React from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

//REDUX
import { connect } from 'react-redux';
import { 
    editEmail, 
    editPassword, 
    getToken 
} from '../redux/actions/authActions';

import { 
    editName, 
    getBorn,
    getGenre,
    getUserType
 } from '../redux/actions/userActions';

//STYLES
import styles from '../styles/registerStyle';

//CONFIGS
import colors from '../configs/colors';

//COMPONENTS
import TextInput from  '../components/textInput';
import Button from '../components/button';
import TwoChoicesButton from '../components/twoChoicesButton';
import Div from '../components/div';
import DataPicker from '../components/datePicker';

export class Register extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        confPassword: null,
    }

    //APAGAR ESSE TRECHO DE CÓDIGO DEPOIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    componentDidMount(){
        this.props.navigation.navigate('registerTeacher')
    }

    handleNext = () => {
        const { confPassword } = this.state
        const { userType, name, email, password, born, genre } = this.props
        
        if(name != null && email != null && password != null && userType != null &&
            confPassword != null && born != null && genre != null ){

                if(password == confPassword) {
                    if(userType == 'student') {
                        this.props.navigation.navigate('registerStudent')
                    }
                    else if(userType == 'teacher') {
                        this.props.navigation.navigate('registerTeacher')
                    }
                }else{
                    Alert.alert('Sua senha é diferente da confirmação de senha')
                }

        }
        else{
            Alert.alert('É necessário preencher todos os campos')
        }
    }

    render() {

        const { name, email, password, born } = this.props
        const { confPassword } = this.state

        return(
            <ScrollView style={{flex: 1, backgroundColor: colors.mainBg}}>
            <View style={styles.container}>
                <Text style={styles.messageTop}>Por favor, se apresente para nós</Text>
                <View style={styles.div}>
                    <Div width='90%'/>
                </View>

                <View style={styles.inputs}>

                <TextInput
                    icon={<Icon type='antdesign' name='user' size={30} color={colors.white}/>}
                    onChangeText={(text) => {this.props.editName(text)}}
                    value={name}
                    placeholder='Nome'
                />

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

                <TextInput
                    icon={<Icon type='font-awesome' name='lock' size={30} color={colors.white}/>}
                    onChangeText={(text) => {this.setState({confPassword: text})}}
                    value={confPassword}
                    placeholder='Confirmar senha'
                    secureTextEntry={true}
                />

                <DataPicker
                    placeholder='Insira sua data de nascimento'
                    onDateChange={(date)=>{this.props.getBorn(date)}}
                    date={born}
                />

                </View>

                

                <Text style={styles.twoChoices}>Sou</Text>

                <TwoChoicesButton 
                    opt1='Homem' 
                    opt2='Mulher' 
                    width='80%'
                    onPressOp1={()=>{this.props.getGenre('male')}}
                    onPressOp2={()=>{this.props.getGenre('female')}}
                    backgroundColor={colors.baseGray}
                    buttonColor={colors.mainBg}
                    selectedTextColor={colors.baseGray}
                    unselectedTextColor={colors.white}
                    fontWeight='bold'
                />
                <TwoChoicesButton 
                    opt1='Aluno(a)' 
                    opt2='Professor(a)' 
                    width='80%'
                    onPressOp1={()=>{this.props.getUserType('student')}}
                    onPressOp2={()=>{this.props.getUserType('teacher')}}
                    backgroundColor={colors.baseGray}
                    buttonColor={colors.mainBg}
                    selectedTextColor={colors.baseGray}
                    unselectedTextColor={colors.white}
                    fontWeight='bold'
                />
                
                <View style={styles.button}>
                    <Button
                    text='CONTINUAR'
                    onPress={this.handleNext}
                    />
                </View>
            </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    name: state.user.name,
    latitude: state.auth.latitude,
    longitude: state.auth.longitude,
    email: state.auth.email,
    password: state.auth.password,
    token: state.auth.token,
    born: state.user.born,
    genre: state.user.genre,
    userType: state.user.userType
});

export default connect(mapStateToProps, 
    { 
        editName, 
        editEmail, 
        editPassword, 
        getToken, 
        getBorn, 
        getGenre, 
        getUserType 
    })(Register)