import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const SuccessScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://icons-for-free.com/download-icon-complete+done+green+success+valid+icon-1320183462969251652_512.png' }} style={styles.image} />
            <Text style={styles.text}>Votre compte a été créé avec succès</Text>
            <TouchableOpacity style={styles.button} onPress={() =>
                navigation.navigate('Accueil')
            }
            >
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
    image: {
        width: 300,
        height: 300,
    },
    text: {
        marginHorizontal: 50,
        marginVertical: 30,
        fontSize: 25,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'grey',
        paddingVertical : 15,
        paddingHorizontal : 30,
    },
});

export default SuccessScreen;