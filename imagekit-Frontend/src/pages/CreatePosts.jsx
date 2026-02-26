import { useState } from "react";
import "./CreatePost.css";

export default function CreatePosts() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // Handle image selection and create a preview URL
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Simulate an API upload request
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image first.");

    setIsUploading(true);

    // Simulate network delay
    setTimeout(() => {
      console.log("Uploaded successfully!", { image, caption });
      alert("Post uploaded successfully!");

      // Reset form
      setImage(null);
      setPreview(null);
      setCaption("");
      setIsUploading(false);
    }, 1500);
  };

  return (
    <div className="create-post-container">
      <div className="create-post-card">
        <h2>Create New Post</h2>

        <form onSubmit={handleUpload}>
          {/* Image Upload Area */}
          <div className="image-upload-area">
            {preview ? (
              <div className="image-preview-wrapper">
                <img src={preview} alt="Preview" className="image-preview" />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => {
                    setImage(null);
                    setPreview(null);
                  }}
                >
                  ✕
                </button>
              </div>
            ) : (
              <label className="upload-placeholder">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden-file-input"
                />
                <span className="upload-icon">📸</span>
                <p>Click to select an image</p>
              </label>
            )}
          </div>

          {/* Caption Input */}
          <div className="caption-area">
            <textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows="3"
              maxLength="250"
            />
            <span className="char-count">{caption.length}/250</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-btn"
            disabled={!image || isUploading}
          >
            {isUploading ? "Uploading..." : "Share Post"}
          </button>
        </form>
      </div>
    </div>
  );
}
