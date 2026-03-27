
type Props = {
  darkMode?: boolean;
};

const Dropdown = ({ darkMode }: Props) => {
  return (
    <select
      className={`
        text-xs px-3 py-1.5 rounded-md border outline-none cursor-pointer
        transition-colors duration-200
        
        ${
          darkMode
            ? "bg-gray-800 text-white border-gray-500"
            : "bg-white text-gray-700 border-gray-300"
        }
      `}
    >
      <option>Duration</option>
      <option>Weekly</option>
      <option>Monthly</option>
    </select>
  );
};

export default Dropdown;