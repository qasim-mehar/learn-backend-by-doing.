import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import axios from "axios";

export default function CreatePosts() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

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

    // 1. Manually build the FormData using your React state
    const formData = new FormData();
    formData.append("image", image); // "image" must match your backend expectation
    formData.append("caption", caption); // "caption" must match your backend expectation

    try {
      // 2. Send the request
      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData,
      );
      navigate("/");
      console.log("Uploaded successfully!", res.data);

      setImage(null);
      setPreview(null);
      setCaption("");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Something went wrong while uploading.");
    } finally {
      setIsUploading(false); // Always turn off the loading state
    }
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
