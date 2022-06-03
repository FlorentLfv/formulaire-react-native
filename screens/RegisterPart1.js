import React, { useRef } from 'react';
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
    const onSubmit = data => {
        navigation.navigate('RegisterPart2');
        console.log(data);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mail</Text>
            <Controller
                control={control}
                rules={{
                    required:{
                        value: true,
                        message: 'Vous n\'avez pas entré votre adresse mail'
                    },
                    pattern:{
                        value: /^[\w\-\.]+@([\w-]+\.)+[\w\-]{2,4}$/gm,
                        message: 'Votre adresse mail n\'est pas au bon format'
                    }
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
            {errors.mail && <Text style={styles.errorText}>{errors.mail && errors.mail.message}</Text> }
            <Text style={styles.text}>Mot de passe</Text>
            <Controller
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Vous n\'avez pas entré votre mot de passe',
                        maxLength: 100,
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Entrez votre mot de passe"
                        secureTextEntry= {true}
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.errorText}>{errors.password && errors.password.message}</Text>}
            <Text style={styles.text}>Confirmation du mot de passe</Text>
            <Controller
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Vous n\'avez pas confirmé votre mot de passe' 
                    },
                    pattern: {
                        message: 'Votre mot de passe ne correspond pas'
                    },
                    maxLength: 100,
                }}
                
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Confirmez votre mot de passe"
                        secureTextEntry= {true}
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="passwordConfirmation"
            />
            {errors.passwordConfirmation && <Text style={styles.errorText}>{errors.passwordConfirmation && errors.passwordConfirmation.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text>SUIVANT</Text>
                <Icon name='arrowright' style={styles.icon} />
            </TouchableOpacity>
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