import React, { useContext, useState } from 'react'
import { Alert, Button, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import auth from '@react-native-firebase/auth'
import { DefaultButton } from '../../components/DefaultButton'
import { Input } from '../../components/Input'
import { Loader } from '../../components/Loader'
import { LinkToSignup } from './styles'
import { DefaultContainer } from '../../components/DefaultContainer'
import { ThemeContext, ThemeType } from '../../constants/Theme'
import styles from '../../components/ProductItem/styles'

export function Login({ navigation }) {

    const [isLoading, setIsLoading] = useState(false)
    const [fieldEmail, setFieldEmail] = useState('')
    const [fieldPassword, setFieldPassword] = useState('')

    const { toggleTheme, theme } = useContext(ThemeContext)
    const isDarkMode = theme === ThemeType.dark;

    function clearFields() {
        setFieldEmail('')
        setFieldPassword('')
    }

    function userLogin() {
        if (fieldEmail === '' || fieldPassword === '') {
            Alert.alert('Todos los campos son obligatorios!.')
        } else {
            setIsLoading(true)
            auth()
                .signInWithEmailAndPassword(fieldEmail, fieldPassword)
                .then((res) => {
                    //console.log(res)
                    clearFields()
                    setIsLoading(false)
                    navigation.navigate('HomeScreen')
                })
                .catch(error => {
                    setIsLoading(false)
                    Alert.alert('Atención, Datos incorrectos por favor intente de nuevo!.')
                    console.log('login error --->', error)
                })
        }
    }

    if (isLoading) {
        if (isLoading) {
            return <Loader />
        }
    }

    return (
        <DefaultContainer>
            <View style={styles.root}>
                <Image
                    style={styles.image}
                    source={require('../../assets/logo.png')}
                />
            </View>
            <Input
                style={styles.text}
                placeholder="E-mail"
                value={fieldEmail}
                onChangeText={(val) => setFieldEmail(val)}
            />
            <Input
                placeholder="Password"
                value={fieldPassword}
                onChangeText={(val) => setFieldPassword(val)}
                secureTextEntry={true}
            />

            <DefaultButton
                onPress={() => userLogin()}
                label="LogIn"
            />

            <LinkToSignup
                onPress={() => navigation.navigate('Signup')}
            >
                You don't have an account yet? Click here to continue!
            </LinkToSignup>

            <Switch value={isDarkMode}
                onValueChange={toggleTheme}
            />
        </DefaultContainer>
    )
}

const style = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
    },

})