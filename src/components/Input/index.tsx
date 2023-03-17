import React from 'react'
import { useTheme } from 'styled-components';

import { Container, TextInput } from './styles'

interface IInput {
    placeholder: string;
    value: string;
    onChangeText: (value: string) => void,
    secureTextEntry?: boolean
}
export function Input({ placeholder, value, onChangeText, secureTextEntry = false }: IInput) {
    const { colors } = useTheme()
    return (
        <Container>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </Container>
    )
}
