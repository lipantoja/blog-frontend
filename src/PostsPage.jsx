import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';

export function PostsPage() {
  let firstName = "Laura";
  let zoo = [
    {
      id: 1,
      title: "Prevost Squirrel",
      body: "This is a cool looking squirrel.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Callosciurus_prevostii_2zz.jpg",
    },
    {
      id: 2,
      title: "Red Panda",
      body: "A panda that is red.",
      image: "https://www.oregonzoo.org/sites/default/files/styles/16x9_fallback/public/2023-08/7-28-2021rA-114.jpg?h=82f92a78&itok=WmUwg5Fx",
    },
  ];
  return (
    <main>
      <PostsNew />
      <PostsIndex firstName={firstName} zoo={zoo} />
    </main>
  );
}
