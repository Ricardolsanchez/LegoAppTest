import React from 'react'
import { Container, Button, ButtonText } from './styles'

interface IButton {
    onPress: () => void;
    label: string;
}

export function DefaultButton({ onPress, label }: IButton) {

    return (
        <Container>
            <Button
                onPress={onPress}
            >
                <ButtonText>{label}</ButtonText>
            </Button>
        </Container>
    )
}