import { useState } from "react";

import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";

function App() {
  const [newProject, setNewProject] = useState(false);

  const newProjectHandler = () => {
    setNewProject(true);
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onNewProject={newProjectHandler} />
      {newProject && <NewProject />}
    </main>
  );
}

export default App;
