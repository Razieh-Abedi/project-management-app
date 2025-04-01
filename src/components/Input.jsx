export default function Input({ isTextarea, label, ...rest }) {
  return (
    <p>
      <label>{label}</label>
      {isTextarea ? <textarea {...rest} /> : <input {...rest} />}
      <input />
    </p>
  );
}
