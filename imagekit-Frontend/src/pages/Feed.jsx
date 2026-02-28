import "./Feed.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h2>Feed</h2>
      </div>

      <div className="feed-list">
        {posts.map((post) => (
          // Use _id from MongoDB, fallback to id for dummy data
          <article key={post._id || post.id} className="post-card">
            {/* 1. Post Header (Avatar & Username) */}
            <div className="post-user-header">
              <div className="user-avatar"></div>
              <span className="username">minimal_user</span>
            </div>

            {/* 2. Edge-to-Edge Image */}
            <img
              src={post.image || post.imageUrl}
              alt="Post content"
              className="post-image"
              loading="lazy"
            />

            {/* 3. Action Bar (Like, Comment, Share) */}
            <div className="post-actions">
              <button className="action-btn">♡</button>
              <button className="action-btn">💬</button>
              <button className="action-btn">⌲</button>
            </div>

            {/* 4. Caption Area */}
            <div className="post-caption-area">
              <p className="post-likes">1,024 likes</p>
              <p className="post-caption">
                <span className="caption-username">minimal_user</span>{" "}
                {post.caption}
              </p>
              <p className="post-time">2 HOURS AGO</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
