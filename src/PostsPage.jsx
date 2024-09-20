import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Modal } from "./Modal";

export function PostsPage() {
  let firstName = "Laura";
  const [zoo, setZoo] = useState([]);

  const getZooData = () => {
    console.log('hello');
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setZoo(response.data);
    })
  }


  useEffect(getZooData, []);
  // useEffect(handleIndex []);

  return (
    <main>
      <PostsNew />
      <PostsIndex firstName={firstName} zoo={zoo} />
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
    </main>
  );
}
