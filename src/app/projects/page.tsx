import { projects } from "@/lib/data";
import ProjectCard from "@/components/project-card";
import Title from "@/components/title";

export default function Projects() {
  return (
    <div>
      <Title>Projects</Title>
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
