import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DataScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
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
        paddingVertical : 15,
        paddingHorizontal : 30,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 100,
    },
    text: {
        color: 'white',
    },
});

export default DataScreen;