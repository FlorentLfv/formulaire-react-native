import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Bonjour</Text>
            <Button title="Connexion" onPress={() =>
                navigation.navigate('Connexion')
            }
            />
            <Button title="Inscription" onPress={() =>
                navigation.navigate('RegisterPart1')
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

export default HomeScreen;