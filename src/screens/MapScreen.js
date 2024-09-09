import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.7749,
                    longitude: -122.4194,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <Marker coordinate={{ latitude: 37.7749, longitude: -122.4194 }} title="Lugar de Ejemplo" />
            </MapView>
            <Button title="Detalles del Lugar" onPress={() => { /* Navegar a detalles */ }} />
            <Button title="Solicitar Itinerario" onPress={() => { /* Navegar a itinerario */ }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default MapScreen;
