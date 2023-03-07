import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import Capitals from '@regions/data/country-capitals.json';

function MapScreen({continent}: {continent: string}): JSX.Element {
  const capitals = Capitals.filter(
    capital => capital.ContinentName === continent,
  ).filter(capital => capital.CapitalName !== 'N/A');
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}>
        {capitals.map((marker, i) => (
          <Marker
            key={i}
            coordinate={{
              latitude: parseFloat(marker.CapitalLatitude),
              longitude: parseFloat(marker.CapitalLongitude),
            }}
            title={marker.CapitalName}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
