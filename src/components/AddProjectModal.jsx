// src/components/AddProjectModal.jsx
import { useState } from "react";

export default function AddProjectModal({ onAdd, onClose }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null); // File object
  const [preview, setPreview] = useState(""); // For preview

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);

      // Generate preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;

    // Create FormData
    const formData = new FormData();
    formData.append("name", name);
    formData.append("number", number);
    formData.append("description", description);
    if (thumbnail) {
      formData.append("thumbnail", thumbnail); // file
    }

    onAdd(formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="Project Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            required
          />

          {/* File Input */}
          <div className="file-input-group">
            <label htmlFor="thumbnail">Thumbnail Image</label>
            <input
              id="thumbnail"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Preview" />
              </div>
            )}
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="primary">
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
