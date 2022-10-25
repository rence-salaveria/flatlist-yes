import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function FloatingActionButton({onPress, title}) {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20,
                paddingHorizontal: 20,
                borderRadius: "50%",
                elevation: 3,
                fontSize: "16px",
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