import { useRef, useState } from "react";

import Input from "./Input";

export default function NewProject({ onAddProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSaveProject() {
    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };
    onAddProject(newProject);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            onClick={handleSaveProject}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" type="text" />
        <Input
          ref={descriptionRef}
          label="Description"
          isTextarea
          type="textarea"
        />
        <Input ref={dueDateRef} label="Due Date" type="date" />
      </div>
    </div>
  );
}
