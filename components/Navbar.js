import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import img from '../assets/favicon.png'

const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Image source={img} style={{ width: 50, height: 50 }} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent:'flex-start',
        flexDirection: 'row',
        gap: 20,
        backgroundColor: '#3949ab',
        padding: 10,
        width: '100%'
    },
    
    text: {
        color: 'white',
        fontSize: 30,
    }
});

export default Navbar;