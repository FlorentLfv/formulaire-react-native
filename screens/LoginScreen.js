import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const LoginScreen = () => {

    const [text, onChangeText] = useState(null);

    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Entrez votre mail"
            />
            <Text>Mot de passe</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Entrez votre mot de passe"
            />
            <Button title="SE CONNECTER" onPress={() =>
                alert('Bienvenue')
            }
            />
            <Text>Pas encore inscrit ? Créer un compte</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default LoginScreen;