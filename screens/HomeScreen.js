import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Bonjour</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Connexion')}>
                <Text>SE CONNECTER</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inscription')}>
                <Text>S'INSCRIRE</Text>
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
    button: {
        marginVertical: 10,
        backgroundColor: 'lightgrey',
        paddingVertical : 15,
        paddingHorizontal : 30,
    },
});

export default HomeScreen;