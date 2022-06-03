import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DataScreen = ({ navigation }) => {

    const data = {
        mail: '',
        password: '',
        civility: '',
        firstname: '',
        lastname: '',
        birthdate: '',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mail : {data.mail}</Text>
            <Text style={styles.text}>Mot de passe : {data.password}</Text>
            <Text style={styles.text}>Civilité : {data.civility}</Text>
            <Text style={styles.text}>Prénom : {data.firstname}</Text>
            <Text style={styles.text}>Nom : {data.lastname}</Text>
            <Text style={styles.text}>Date de naissance : {data.birthdate}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Accueil')}>
                <Text>RETOUR ACCUEIL</Text>
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
    button: {
        marginVertical: 30,
        backgroundColor: 'lightgrey',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 100,
    },
    text: {
        color: 'white',
        marginTop: 15,
    },
});

export default DataScreen;