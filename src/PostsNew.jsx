export function PostsNew() {
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
  );
}
