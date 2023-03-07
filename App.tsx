/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Filter from '@regions/components/Filter';
import Regions from '@regions/data/regions.json';
import MapView from '@regions/components/MapView';

function App(): JSX.Element {
  const [region, setRegion] = useState<string>('EU');
  const onChangeValue = useCallback((value: string) => {
    setRegion(value);
  }, []);
  const getContinentName = (r: string): string =>
    Regions.find((val: {label: string; value: string}) => val.value === r)
      ?.label ?? 'Europe';

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <View style={styles.sectionContainer}>
        <Filter onChangeValue={onChangeValue} region={region} />
        <MapView continent={getContinentName(region)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
