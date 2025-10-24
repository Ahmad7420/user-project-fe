// src/components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  const { name, number, description, thumbnail } = project;

  return (
    <div className="project-card">
      {/* Thumbnail on the left */}
      <div className="project-thumbnail">
        {thumbnail ? (
          <img src={thumbnail} alt={`${name} thumbnail`} />
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
