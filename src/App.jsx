import { useState } from "react";

import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [newProject, setNewProject] = useState(false);
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  })

  const newProjectHandler = () => {
    setNewProject(true);
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onNewProject={newProjectHandler} />
      {newProject && <NewProject />}
      <NoProjectSelected/>
    </main>
  );
}

export default App;
