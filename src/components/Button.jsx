export const Button = ({ onClick, value, text, fill = true }) => {
  return (
    <button
      onClick={onClick}
      value={value}
      className={fill ? "fill" : "notfill"}
    >
      {text}
    </button>
  );
};
