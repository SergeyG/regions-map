import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Regions from '@regions/data/regions.json';

export type DropDownPickerProps = {
  onChangeValue: (value: string) => void;
  region: string;
};

export default function Filter({onChangeValue, region}: DropDownPickerProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(region || null);
  const [regions, setRegions] = useState<
    {
      label: string;
      value: string;
    }[]
  >(Regions);
  useEffect(() => {
    if (value === null) {
      return;
    }
    onChangeValue(value);
  }, [onChangeValue, value]);

  const platformWrapper = Platform.select({
    ios: {
      zIndex: open ? 1 : 0,
    },
  });

  return (
    <View style={[styles.filterContainer, platformWrapper]}>
      <Text style={styles.filterLabel}>Filter by region:</Text>
      <DropDownPicker
        itemKey="label"
        open={open}
        value={value}
        items={regions}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setRegions}
        containerStyle={styles.regionPicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  regionPicker: {
    width: 100,
  },
  filterLabel: {
    color: 'gray',
    fontWeight: '400',
  },
});
