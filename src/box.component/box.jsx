import "./box.css";

const Box = ({placeholder,changeHandler}) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={changeHandler}
    />
  );
};

export default Box;
