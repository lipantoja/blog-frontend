import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Modal } from "./Modal";

export function PostsPage() {
  let firstName = "Laura";
  const [zoo, setZoo] = useState([]);
  const [isZooShowVisible, setIsZooShowVisible] = useState(false);
  const [currentZoo, setCurrentZoo] = useState({});

  const getZooData = () => {
    console.log('hello');
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setZoo(response.data);
    })
  }
  const showModal = (zoo) => {
    console.log('showing the modal');
    console.log(zoo);
    setCurrentZoo(zoo);
    setIsZooShowVisible(true);
  }
  const closeModal = () => {
    // console.log('closing modal');
    setIsZooShowVisible(false);
  }


  useEffect(getZooData, []);
  // useEffect(handleIndex []);

  return (
    <main>
      <PostsNew />
      <PostsIndex firstName={firstName} zoo={zoo} onShow={showModal} />
      <Modal show={isZooShowVisible} onClose={closeModal}>
        <div>
          <p>title:{currentZoo.title}</p>
          <p>body:{currentZoo.body}</p>
          <p>image:{currentZoo.image}</p>
        </div>
      </Modal>
    </main>
  );
}
