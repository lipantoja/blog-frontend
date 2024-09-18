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
  // <PostsIndex zoo={zoo} />
  return (
    <div id="posts-index">
      <h1>All posts</h1>
        {/* <p>{props.firstName}</p> */}
        {props.zoo.map(zoo => (
          <div key={zoo.id} className="zoo">
            <h2>{zoo.title}</h2>
            <img src={zoo.image_url} alt="" />
            <p>Chef: {zoo.chef}</p>
            <button>More info</button>
          </div>
        ))}
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
  let firstName = "Test";
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tSZIcjrZcJWphbaCyUIXtyniziDtvQSrRg&s",
    },

  ];
  return(
    <main>
      <PostsNew />
      <PostsIndex firstName={firstName} zoo={zoo} />
    </main>
  )
}

export default App;