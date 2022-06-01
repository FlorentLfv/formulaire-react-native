import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import Icon from 'react-native-vector-icons/AntDesign';

// Regex mail: /^[\w\-\.]+@([\w-]+\.)+[\w\-]{2,4}$/gm

const RegisterPart1 = ({ navigation }) => {

    // constructor() {
    //     super();
    //     this.state = {
    //         mail: '',
    //         password: '',
    //         passwordConfirmation: '',
    //     }
    // }
    // submit()
    // {
    //     console.warn(this.state)
    // }

    // render() {
    //     return (
    //         <View>
    //             <TextInput
    //                 placeholder='Entrer mail'
    //                 onChangeText={(text) => { this.setState({ mail: text }) }}
    //                 style={{ borderWidth: 2, borderColor: 'black', margin: 20 }}
    //             />
    //             <TextInput
    //                 placeholder='Entrer mot de passe'
    //                 secureTextEntry={true}
    //                 onChangeText={(text) => { this.setState({ password: text }) }}
    //                 style={{ borderWidth: 2, borderColor: 'black', margin: 20 }}
    //             />
    //             <TextInput
    //                 placeholder='Confirmer mot de passe'
    //                 secureTextEntry={true}
    //                 onChangeText={(text) => { this.setState({ passwordConfirmation: text }) }}
    //                 style={{ borderWidth: 2, borderColor: 'black', margin: 20 }}
    //             />
    //             <Button title='submit' onPress={()=>{this.submit()}} />
    //         </View>
    //     )
    //  }

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <View style={styles.container}>
            {/* <Text>Email</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => { setData({ mail: text }) }}
                placeholder="Entrez votre mail"
            />
            <Text>Mot de passe</Text>
            <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={(text) => { setData({ password: text }) }}
                placeholder="Entrez votre mot de passe"
            />
            <Text>Confirmation du mot de passe</Text>
            <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={(text) => { setData({ passwordConfirmation: text }) }}
                placeholder="Entrez votre mot de passe"
            />
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('RegisterPart2'); console.warn(data); }}>
                <Text>SUIVANT</Text>
                <Icon name='arrowright' style={styles.icon} />
            </TouchableOpacity> */}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="firstName"
            />
            {errors.firstName && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="lastName"
            />
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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

});

export default RegisterPart1;
