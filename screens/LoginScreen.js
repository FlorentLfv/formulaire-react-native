import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const [text, onChangeText] = useState(null);

    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={text}
                placeholder="Entrez votre mail"
            />
            <Text>Mot de passe</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={text}
                placeholder="Entrez votre mot de passe"
            />
            <TouchableOpacity style={styles.button} onPress={() => alert('Bienvenue')}>
                <Text>SE CONNECTER</Text>
            </TouchableOpacity>
            <View style={styles.row}>
                <Text>Pas encore inscrit ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Inscription')}>
                    <Text style={styles.clickableText}>Créer un compte</Text>
                </TouchableOpacity>
            </View>
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
    row: {
        flexDirection: 'row'
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        marginVertical: 10,
        backgroundColor: 'lightgrey',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    clickableText: {
        color: 'blue',
    },
});

export default LoginScreen;