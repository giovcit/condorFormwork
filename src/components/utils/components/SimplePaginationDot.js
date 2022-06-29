import React from 'react';
import { Dimensions } from 'react-native';
import {View, StyleSheet} from 'react-native';
import Colors from './Colors';


const win = Dimensions.get('window');

function genCircleStyle(size) {
  if (!size) {
    return {};
  }
  return {width: size, height: 0, borderRadius: 0};
}

function Dot({isActive, color, activeDotSize, inActiveDotSize, dotSeparator}) {
  const processedActiveDotStyle = [
    styles.activeDot,
    {
      backgroundColor: color,
      borderColor: color,
      marginHorizontal: dotSeparator / 2,
      ...genCircleStyle(activeDotSize),
    },
  ];
  const processedInActiveDotStyle = [
    styles.inActiveDot,
    {
      backgroundColor: 'transparent',
      borderColor: '#c5c5c5',
      marginHorizontal: dotSeparator / 2,
      ...genCircleStyle(inActiveDotSize),
    },
  ];
  return (
    <View
      style={[
        styles.baseDot,
        isActive ? processedActiveDotStyle : processedInActiveDotStyle,
      ]}
    />
  );
}

export default function SimplePaginationDot(props) {
  const {
    style,
    length,
    currentIndex = 0,
    activeDotSize = 10,
    inActiveDotSize = 10,
    color = Colors.redCondor,
    dotSeparator = 0,
  } = props;
  function renderItem(item, index) {
    return (
      <Dot
        key={index}
        isActive={index === currentIndex}
        color={color}
        activeDotSize={((win.width/100*90)/length)}
        inActiveDotSize={((win.width/100*90)/length)}
        dotSeparator={dotSeparator}
      />
    );
  }
  return (
    <View style={[styles.container, style]}>
      {Array(length).fill(0).map(renderItem)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:15,
    paddingBottom:10
    
    
  },
  baseDot: {
    borderTopWidth:2,
    backgroundColor:'#ddd'
  },
  activeDot: {
    backgroundColor: 'red',
  },
  inActiveDot: {
    backgroundColor: 'gray',
  },
});