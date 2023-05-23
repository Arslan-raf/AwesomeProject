import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, Platform} from 'react-native';


const Post = ({ post }) => {

    const [count, setCount] = useState(1)

    const colors = ['red', 'blue', 'black'];
    const [color, setColor] = useState(0);

    const colorStyles = {
        color: colors[color],
    };

    const changeSetting = (value, options, setterFunction) => {
        if (value === options.length - 1) {
            setterFunction(0);
            return;
        }
        setterFunction(value + 1);
    };


    function getPicture() {
        setCount(count + 1)
        if (count === 2) {
            setCount(1)
        }
    }

    function getPictureBack() {
        setCount(count - 1)
        if (count === 1) {
            setCount(2)
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: `https://reactnative.dev/docs/assets/p_cat${count}.png`,
                }}
                style={styles.img}
            />
            <Text style={colorStyles}>Пост № {post.id}, {post.title}</Text>

            <Text style={colorStyles}>{post.desc}</Text>
                {/* {Platform.OS === 'ios' ? <Text>ios</Text> : <Text>не ios</Text> } */}
            <View style={styles.btnsBox}>
                <Button
                    onPress={getPicture}
                    // disabled={count === 10}
                    title="+"
                />

                <Button
                    onPress={getPictureBack}
                    // disabled={count === -10}
                    title="-"
                />
                <Button
                    title="Color"
                    onPress={() => changeSetting(color, colors, setColor)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#94a5ed',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 300,
        borderStyle: 'solid',
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        marginBottom: 12,
        borderRadius: 20
    },
    img: {
        width: 130,
        height: 130
    },
    btnsBox: {
        flexDirection: 'row',
        gap: 40,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    
});

export default Post;