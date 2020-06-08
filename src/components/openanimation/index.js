import React, { useState, useEffect } from 'react';
import { View, MaskedViewIOS, Text, Animated, StyleSheet } from 'react-native';

import styles from '../../pages/notes/styles';
import logo from '../../assets/logo.png';

export default function openAnimation() {
    const [load, setLoad] = useState();
    const [done, setDone] = useState();

    useEffect(() => {
        Animated.timing(load, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true,
            delay: 1000
        }).start(() => {
            setDone(true);
        });
    });

    const colorLayer = done ? null: <View style={[StyleSheet.absoluteFill, {backfaceVisibility: '#0066ff'}]} />
    const whiteLayer = done ? null: <View style={[StyleSheet.absoluteFill, {backgroundColor: '#fff'}]} />

    const imageScale = {
        transform: [
            {
                scale: load.interpolate({
                    inputRange: [0, 15, 100],
                    outputRange: [0.1, 0.6, 16]
                })
            }
        ]
    }

    const opacity = {
        opacity: load.interpolate({
            inputRange: [0, 25, 50],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
    }

    return(
        <View>
            {colorLayer}
            <MaskedViewIOS 
                style={styles.mvIOS}
                maskElement={
                    <View style={styles.centered}>
                        <Animated.Image
                            source={logo}
                            style={[{width: 1000}, imageScale]}
                            resizeMode='contain'
                        />
                    </View>
                }
            />
            {whiteLayer}
        </View>
    );
}