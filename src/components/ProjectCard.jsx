// src/components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  const { name, number, description, thumbnailUrl } = project;

  return (
    <div className="project-card">
      {/* Thumbnail on the left */}
      <div className="project-thumbnail">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={`${name} thumbnail`} />
        ) : (
          <div className="thumbnail-placeholder">
            <span>No Image</span>
          </div>
        )}
      </div>

      {/* Content on the right */}
      <div className="project-content">
        <h3>{name}</h3>
        <p>
          <strong>Number:</strong> {number}
        </p>
        <p className="description">
          <strong>Description:</strong> {description}
        </p>
      </div>
    </div>
  );
}
