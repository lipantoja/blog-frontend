export function PostsIndex(props) {

  // <PostsIndex zoo={zoo} />
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.zoo.map(zoo => (
        <div key={zoo.id} className="zoo">
          <h2>{zoo.title}</h2>
          <img src={zoo.image} alt="" />
          <p>More info down below: {zoo.Later}</p>
          <button onClick={props.onShow}>More info</button>
        </div>
      ))}
    </div>
  );
}
