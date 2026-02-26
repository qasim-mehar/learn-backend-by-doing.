import "./Feed.css";

// Dummy data to simulate your posts
const DUMMY_POSTS = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/seed/minimal1/600/600",
    caption: "Finding peace in simplicity today. Less is always more.",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/seed/minimal2/600/600",
    caption: "Morning coffee and a clean workspace.",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/seed/minimal3/600/600",
    caption: "Architecture walk downtown.",
  },
];

export default function Feed() {
  return (
    <div className="feed-container">
      <div className="feed-header">
        <h2>Feed</h2>
      </div>

      <div className="feed-list">
        {DUMMY_POSTS.map((post) => (
          <article key={post.id} className="post-card">
            <img
              src={post.imageUrl}
              alt="Post content"
              className="post-image"
              loading="lazy"
            />
            <div className="post-caption-area">
              <p className="post-caption">{post.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
