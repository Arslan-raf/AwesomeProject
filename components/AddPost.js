import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const AddPost = ({ create }) => {

    const [post, setPost] = useState({ title: '', desc: '' });

    const addNewPost = () => {

        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost)
        setPost({ title: '', desc: '' })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Добавить пост:</Text>
            <TextInput
                style={styles.input}
                placeholder='Заголовок поста'
                value={post.title}
                onChangeText={(value) => setPost({ ...post, title: value })}
            ></TextInput>
            <TextInput
                style={styles.input}
                placeholder='Описание поста'
                value={post.desc}
                onChangeText={(value) => setPost({ ...post, desc: value })}
            />
            <Button
                style={styles.button}
                title='Добавить пост'
                onPress={addNewPost}
            ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    title: {
        fontSize: 30,
        color:'red',
    },
    button: {
        color: '#3949ab'
    },
    input: {
        borderRadius: 2,
        fontSize: 13,
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 35,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },
});
export default AddPost;