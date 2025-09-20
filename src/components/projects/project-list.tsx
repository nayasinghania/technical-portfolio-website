import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/lib/data";

export default function ProjectList() {
  return (
    <ul className="projects">
      {projects.map((project) => (
        <li key={project.title}>
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  );
}
