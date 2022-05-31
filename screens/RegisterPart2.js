import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const RegisterScreen2 = ({ navigation }) => {

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
            <Text>Confirmation du mot de passe</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Entrez votre mot de passe"
            />
            <Button title="TERMINÉ" onPress={() =>
                navigation.navigate('Success')
            }
            />
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
});

export default RegisterScreen2;