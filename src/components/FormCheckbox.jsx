const FormCheckbox = ({ label, name, size, defaultValue }) => {
  return (
    <div className="form-control flex flex-col justify-center items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        defaultValue={defaultValue}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
