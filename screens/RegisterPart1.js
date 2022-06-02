import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import Icon from 'react-native-vector-icons/AntDesign';

// Regex mail: /^[\w\-\.]+@([\w-]+\.)+[\w\-]{2,4}$/gm

const RegisterPart1 = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            mail: '',
            password: '',
            passwordConfirmation: '',
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
                        pattern={['^[\w\-\.]+@([\w-]+\.)+[\w\-]{2,4}$']}
                        placeholder="Entrez votre mail"
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="mail"
            />
            {errors.mail && <Text style={styles.errorText}>Vous n'avez pas entré votre mail</Text> }
            <Text style={styles.text}>Mot de passe</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                    maxLength: 100,
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
            {errors.password && <Text style={styles.errorText}>Vous n'avez pas entré votre mot de passe</Text>}
            <Text style={styles.text}>Confirmation du mot de passe</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Confirmez votre mot de passe"
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="passwordConfirmation"
            />
            {errors.passwordConfirmation && <Text style={styles.errorText}>Vous n'avez pas confirmé votre mot de passe</Text>}
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('RegisterPart2'); }}>
                <Text>SUIVANT</Text>
                <Icon name='arrowright' style={styles.icon} />
            </TouchableOpacity>
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderColor: 'orange',
        padding: 10,
        backgroundColor: 'lightgrey',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: 'lightgrey',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    icon: {
        color: 'black',
        fontSize: 25,
        marginLeft: 5,
    },
    text: {
        color: 'white',
    },
    errorText: {
        color: 'red',
        marginBottom: 20,
    },
});

export default RegisterPart1;