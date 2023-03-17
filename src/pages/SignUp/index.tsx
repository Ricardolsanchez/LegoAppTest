import React, { useState, useContext } from 'react'
import { Alert, Image, StyleSheet, Switch, View } from 'react-native'
import { LinkToLogin } from './styles'
import { DefaultContainer } from '../../components/DefaultContainer'
import { Loader } from '../../components/Loader'
import { Input } from '../../components/Input'
import { DefaultButton } from '../../components/DefaultButton'
import { ThemeContext, ThemeType } from '../../constants/Theme'

import auth from '@react-native-firebase/auth'
import styles from '../../components/ProductItem/styles'

export function Signup({ navigation }) {

    const [isLoading, setIsLoading] = useState(false)
    const [fieldName, setFieldName] = useState('')
    const [fieldEmail, setFieldEmail] = useState('')
    const [fieldPassword, setFieldPassword] = useState('')

    const { toggleTheme, theme } = useContext(ThemeContext)
    const isDarkMode = theme === ThemeType.dark;

    function clearFields() {
        setFieldName('')
        setFieldEmail('')
        setFieldPassword('')
    }

    function registerUser() {
        if (fieldName === '' || fieldEmail === '' || fieldPassword === '') {
            Alert.alert('Atención, todos los campos son obligatorios!')
        } else {
            setIsLoading(true)

            auth()
                .createUserWithEmailAndPassword(fieldEmail, fieldPassword)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: fieldName
                    })
                    setIsLoading(false)
                    clearFields()
                    navigation.navigate('Login')
                })
                .catch(error => {
                    setIsLoading(false)
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('Atención, el email ya está en uso!.')
                        return
                    }

                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('Atención este email es invalido.')
                        return
                    }

                    if (error.code === 'auth/weak-password') {
                        Alert.alert('Alert, el uso de caractedes está erroneo.')
                        return
                    }

                    Alert.alert('Alert', 'Atención verifique su internet!.')

                    console.error(error)
                })
        }
    }

    if (isLoading) {
        return <Loader />
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
                placeholder="Name"
                value={fieldName}
                onChangeText={(val) => setFieldName(val)}
            />
            <Input
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
                onPress={() => registerUser()}
                label="Register"
            />

            <LinkToLogin
                onPress={() => navigation.navigate('Login')}
            >
                Are you already registered?.
            </LinkToLogin>
            <Switch value={isDarkMode}
                onValueChange={toggleTheme}
            />
        </DefaultContainer>

    )
}

const style = StyleSheet.create({

    root: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
    }
})