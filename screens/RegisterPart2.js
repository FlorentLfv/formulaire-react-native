import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';

const RegisterPart2 = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            civility: '',
            firstname: '',
            lastname: '',
            birthdate: '',
        }
    });
    const onSubmit = data => {
        navigation.navigate('Success');
        console.log(data);
    }

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Civilité</Text>
            <Controller
                control={control}
                rules={{
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <RNPickerSelect
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        
                        onValueChange={(value) => console.log(value)}
                        placeholder={{
                            label: 'Choisissez votre civilité',
                            color: 'lightgrey',
                        }}
                        items={[
                            { color: 'lightgrey', label: 'Monsieur', value: 'Mr.' },
                            { color: 'lightgrey', label: 'Madame', value: 'Mme' },
                            { color: 'lightgrey', label: 'Non binaire', value: 'Non-Binaire' },
                        ]}
                    />
                )}
                name='civility'
            /> */}
            {errors.civility && <Text style={styles.errorText}>Vous n'avez pas entré votre civilité</Text>}
            <Text style={styles.text}>Prénom</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Entrez votre prénom"
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="firstname"
            />
            {errors.firstname && <Text style={styles.errorText}>Vous n'avez pas entré votre prénom</Text>}
            <Text style={styles.text}>Nom</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Entrez votre nom de famille"
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="lastname"
            />
            {errors.lastname && <Text style={styles.errorText}>Vous n'avez pas entré votre nom de famille</Text>}
            {/* <Text style={styles.text}>Date de naissance</Text>
            <>
                <Button title="Open" onPress={() => setOpen(true)} />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </> */}
            {errors.birthdate && <Text style={styles.errorText}>Vous n'avez pas entré votre date de naissance</Text>}
            <TouchableOpacity style={styles.button} title="TERMINÉ" onPress={handleSubmit(onSubmit)}>
                <Text>TERMINÉ</Text>
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
        marginVertical: 10,
        backgroundColor: 'lightgrey',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    select: {
        backgroundColor: 'white',
    },
    text: {
        color: 'white',
    },
    errorText: {
        color: 'red',
        marginBottom: 20,
    },
});

export default RegisterPart2;