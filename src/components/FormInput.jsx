const FormInput = ({ label, type, name, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label block">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`input input-bordered ${size} `}
        defaultValue={defaultValue}
      />
    </div>
  );
};
export default FormInput;
