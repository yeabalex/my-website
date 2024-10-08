import ProjectsPage from "@/components/pages/ProjectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Projects() {
  return (
    <ProjectsPage />
  );
}
