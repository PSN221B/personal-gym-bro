import React, { useState} from 'react';
import {
  StyleProp,
  ViewStyle,
  Animated,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  SafeAreaView,
  I18nManager,
} from 'react-native';
import { AnimatedFAB } from 'react-native-paper';

const AddExerciseFAB = ({
  visible,
  extended,
  label,
  animateFrom,
  navigation,
}) => {
  const isIOS = Platform.OS === 'ios';

  const fabStyle = { [animateFrom]: 16 };

  return (
      <AnimatedFAB
        icon={'plus'}
        label={label}
        extended={extended}
        onPress={()=> {navigation.navigate('SearchScreen')}}
        visible={visible}
        animateFrom={'right'}
        iconMode={'static'}
        style={[styles.fabStyle, fabStyle]}
      />
  );
};

export default AddExerciseFAB;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});