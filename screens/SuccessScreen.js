import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const SuccessScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Votre compte a été créé avec succès</Text>
            <Button title="ACCUEIL" onPress={() =>
                navigation.navigate('Accueil')
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

export default SuccessScreen;