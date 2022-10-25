import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function Button({onPress, title}) {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                elevation: 3,
                backgroundColor: '#CC9767',
            }}
            onPress={onPress}
            activeOpacity={0.2}
        >
            <Text style={{
                color: '#fff'
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}