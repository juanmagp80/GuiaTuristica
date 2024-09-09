import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Navegar a la pantalla de login después de 3 segundos
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);

        // Limpiar el timeout si el componente se desmonta
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>Cargando...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#000',
    },
});

export default SplashScreen;
