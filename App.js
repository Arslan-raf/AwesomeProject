
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Post from './components/Post';
import Navbar from './components/Navbar';
import AddPost from './components/AddPost';


export default function App() {

  const data = [
    { id: 1, title: "Java script", desc: "текст" },
    { id: 2, title: "Title", desc: "текст" },
    { id: 3, title: "Title", desc: "текст" }
  ];

  const [posts, setPosts] = useState(data);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  return (
    <View style={styles.div}>
      <Navbar title="NavBar"></Navbar>
      <AddPost create={createPost}></AddPost>
      <ScrollView style={styles.container}>
        {
          posts.map(post => {
            return (
              <Post post={post} key={post.id} ></Post>
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },

  div: {
    marginTop: 35,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#9c30fa',
  },

});

