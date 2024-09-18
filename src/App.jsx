function Header () {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
    <h1>New post</h1>
    <form>
      {/* Title Input */}
      <label htmlFor="title">Our First Blog</label><br />
      <input type="text" id="title" name="title" required /><br /><br />

      {/* Body Input */}
      <label htmlFor="body">Body:</label><br />
      <textarea id="body" name="body" rows="5" required></textarea><br /><br />

      {/* Image Input */}
      <label htmlFor="image">Upload an image:</label><br />
      <input type="file" id="image" name="image" accept="image/*" /><br /><br />

    </form>
  </div>
  )
}

function PostsIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <p>The name is {props.name}</p>

    {/* Post 1 */}
    <div className="">
      <h2>Squirrel Post</h2>
      <p>Squirrel is here</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Callosciurus_prevostii_2zz.jpg" alt="First post" />
    </div>
    <hr />

    {/* Post 2 */}
    <div className="post">
      <h2>Panda Post</h2>
      <p>This is red panda, how cute</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tSZIcjrZcJWphbaCyUIXtyniziDtvQSrRg&s" alt="Second post" />
    </div>
    <hr />
  </div>
  )
}

function Footer() {
  return (
  <footer>
    <p>Copyright 20XX</p>
  </footer>
  )
}
function App() {
  return (
    <div>
      <Header />
      <PostsPage />
      <Footer />
    </div>
  );
}
function PostsPage (){
  let name = "Test";
  return(
    <main>
      <PostsNew />
      <PostsIndex name={name} />
    </main>
  )
}

export default App;