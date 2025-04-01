import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" placeholder="Add a title" type="text" />
        <Input
          label="Description"
          isTextarea
          placeholder="Add a description"
          type="textarea"
        />
        <Input label="Due Date" placeholder="Add a due date" type="date" />
      </div>
    </div>
  );
}
