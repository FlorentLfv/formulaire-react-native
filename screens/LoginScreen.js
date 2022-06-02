import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useForm, Controller } from "react-hook-form";

const LoginScreen = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            mail: '',
            password: '',
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Email</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Entrez votre mail"
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="mail"
            />
            {errors.mail && <Text>Vous n'avez pas entré votre mail</Text>}
            <Text style={styles.text}>Mot de passe</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Entrez votre mot de passe"
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            {errors.mail && <Text>Vous n'avez pas entré votre mot de passe</Text>}
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Informations')}>
                <Text>SE CONNECTER</Text>
            </TouchableOpacity>
            <View style={styles.row}>
                <Text style={styles.text}>Pas encore inscrit ? </Text>
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
        backgroundColor: '#212121',
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
        backgroundColor: 'lightgrey',
    },
    text: {
        color: 'white',
    },
    button: {
        marginVertical: 10,
        backgroundColor: 'lightgrey',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    clickableText: {
        color: '#2da4ff',
    },
});

export default LoginScreen;