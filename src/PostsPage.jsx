import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
import axios from 'axios';

export function PostsPage() {
  let firstName = "Laura";
  let posts = [];

  const getZooData = () => {
    console.log('hello');
  }
  
  axios.get("http://localhost:3000/recipes.json").then(response => {
    console.log(response);
  })


  return (
    <main>
      <PostsNew />
      <PostsIndex firstName={firstName} zoo={posts} />
      <button onClick={getZooData}>get the data</button>
    </main>
  );
}
