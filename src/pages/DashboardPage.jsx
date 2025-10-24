import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import AddProjectModal from "../components/AddProjectModal";
import { getAllProjects, uploadProject } from "../services/projectService";

export default function DashboardPage() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProjects = async () => {
    return await getAllProjects();
  };

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data.data);
    });
  }, []);

  const addProject = async (formData) => {
    await uploadProject(formData);
    const reader = new FileReader();
    reader.onloadend = () => {
      const newProject = {
        id: Date.now(),
        name: formData.get("name"),
        number: formData.get("number"),
        description: formData.get("description"),
        thumbnail: reader.result, // base64 preview
      };
      setProjects((prev) => [...prev, newProject]);
    };

    const file = formData.get("thumbnail");
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setProjects((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: formData.get("name"),
          number: formData.get("number"),
          description: formData.get("description"),
          thumbnail: null,
        },
      ]);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>My Projects</h1>
        <div className="header-actions">
          <button onClick={() => setIsModalOpen(true)} className="add-btn">
            Add Project
          </button>
          <Link to="/" className="logout-link">
            Logout
          </Link>
        </div>
      </header>

      <div className="projects-grid">
        {projects.length === 0 ? (
          <p>No projects yet. Click "Add Project" to start!</p>
        ) : (
          projects.map((p) => <ProjectCard key={p.id} project={p} />)
        )}
      </div>

      {isModalOpen && (
        <AddProjectModal
          onAdd={addProject}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
