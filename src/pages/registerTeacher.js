import React from 'react';
import { View, Text, ScrollView, Modal } from 'react-native';
import { Icon } from 'react-native-elements';

//CONFIGS
import colors from '../configs/colors';
import fontSize from '../configs/fonts';

//STYLES
import styles from '../styles/registerTeacherStyle';

//COMPONENTS
import Div from '../components/div';
import Button from '../components/button';
import TextInput from '../components/textInput';
import TwoChoicesButton from '../components/twoChoicesButton';
import CheckBox from '../components/checkBox';

//REDUX
import { connect } from 'react-redux';
import {
    myCollege,
    collegeSituation
} from '../redux/actions/userActions';


export class RegisterTeacher extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    state = {
        services:[
            {key: '0', title: 'Ensino fundamental', isSelected: false}, 
            {key: '1', title: 'Ensino médio', isSelected: false},
            {key: '2', title: 'Pré vestibular', isSelected: false},
            {key: '3', title: 'Concurso público', isSelected: false},
            {key: '4', title: 'Colégio militar', isSelected: false},
            {key: '5', title: 'ENEM', isSelected: false},
        ],

        choosedServices: []
    }

    handleChooseService = (op) => {
        const key = op.key
        const title = op.title
        if(op.isSelected === true){
            const state = this.state
            state.services[key] = {key, title, isSelected: false}
            this.setState(state)
        }else{
            const state = this.state
            state.services[key] = {key, title, isSelected: true}
            this.setState(state)
        }
    }


    handleSendServices = () => {
        const state = this.state
        state.choosedServices = []
        state.services.map((op) => {
            if(op.isSelected === true){
                state.choosedServices = [ ...state.choosedServices, op ]
                this.setState(state)
            }
        })
        console.log(state.choosedServices)
    }

    render() {

        const { myCollege } = this.props

        return(
            <ScrollView style={{flex: 1, backgroundColor: colors.mainBg}}>
            <View style={styles.container}>

                <Text style={styles.messageTop}>Estamos quase acabando</Text>
                
                <View style={styles.div}>
                    <Div width='90%'/>
                </View>
                
                <TextInput
                    icon={<Icon type='ionicon' name='md-school' size={30} color={colors.white}/>}
                    placeholder='Faculdade frequentada'
                    onChangeText={(text)=>{this.props.myCollege(text)}}
                    value={myCollege}
                />

                <TwoChoicesButton 
                    opt1='Cursando' 
                    opt2='Finalizado' 
                    width='80%'
                    onPressOp1={()=>{this.props.collegeSituation('studying')}}
                    onPressOp2={()=>{this.props.collegeSituation('concluded')}}
                    backgroundColor={colors.baseGray}
                    buttonColor={colors.mainBg}
                    selectedTextColor={colors.baseGray}
                    unselectedTextColor={colors.white}
                    fontWeight='bold'
                />

                <Text style={styles.myPublic}>Público alvo</Text>
                
                <View style={styles.options}>
                    {this.state.services.map((op) => (
                        <CheckBox 
                        option={op.title} 
                        isSelected={op.isSelected}
                        onPress={()=>{this.handleChooseService(op)}}
                        />
                    ))}
                </View>

                <View style={[styles.div, {marginTop: 20, marginBottom: 20}]}>
                    <Div width='90%'/>
                </View>

                <View style={styles.button}>
                    <Button
                    text='CADASTRAR'
                    onPress={this.handleSendServices}
                    />
                </View>
        
            </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    myCollege: state.user.myCollege,
    collegeSituation: state.user.collegeSituation
});

export default connect(mapStateToProps, {myCollege, collegeSituation})(RegisterTeacher)