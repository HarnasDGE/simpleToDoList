export const OptionFormular = ({
  onChange,
  value,
  title,
  type = "text",
  alert,
}) => {
  return (
    <>
      <label className="addTask-option-name" htmlFor={`${title}${type}`}>
        {title}:
      </label>
      <div className={`addTask-option-input`}>
        <input
          id={`${title}${type}`}
          className={`${alert && "addTask-option-error"}`}
          type={type}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>
      {alert && (
        <div className="addTask-alert">
          <span className="material-symbols-outlined">error</span>
          {alert}
        </div>
      )}
    </>
  );
};
