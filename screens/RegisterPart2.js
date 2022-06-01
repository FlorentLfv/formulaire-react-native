import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useForm } from "react-hook-form";
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';

const RegisterPart2 = ({ navigation }) => {

    const [text, onChangeText] = useState(null);

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            <Text>Civilité</Text>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                placeholder='Choisissez votre civilité'
                items={[
                    { label: 'Monsieur', value: 'mister' },
                    { label: 'Madame', value: 'miss' },
                    { label: 'Non binaire', value: 'non-binary' },
                ]}
            />
            <Text>Prénom</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={text}
                placeholder="Entrez votre prénom"
            />
            <Text>Nom</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={text}
                placeholder="Entrez votre nom"
            />
            {/* <>
                <Text>Date de naissance</Text>
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text>Ouvrir</Text>
                </TouchableOpacity>
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
            <TouchableOpacity style={styles.button} title="TERMINÉ" onPress={() => navigation.navigate('Success')}>
                <Text>TERMINÉ</Text>
            </TouchableOpacity>
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
        marginVertical: 10,
        backgroundColor: 'lightgrey',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    select: {
        color: 'black'
    }
});

export default RegisterPart2;