import React from 'react';
import { View } from 'react-native';

const div = ({ width, color='white' }) => (
    <View style={{height: 1, width: width, backgroundColor: color}}/>
)

export default div