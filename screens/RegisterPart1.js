import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const RegisterPart1 = ({ navigation }) => {

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
            <Button title="SUIVANT ->" onPress={() =>
                navigation.navigate('RegisterPart2')
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

export default RegisterPart1;

// Regex mail: /^[\w\-\.]+@([\w-]+\.)+[\w\-]{2,4}$/gm