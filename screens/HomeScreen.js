import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{uri: 'http://blastzone.fr/wp-content/uploads/2021/09/84782477_233092137709314_5115980337926635520_n.png'}} />
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
});

export default HomeScreen;