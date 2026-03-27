  
import Dropdown from "./Dropdown";
type Props = {
  title: string;
  children: React.ReactNode;
  darkMode?: boolean;
};

const Card = ({ title, children, darkMode }: Props) => {
  return (
    <div
      className={`
        ${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}
        rounded-lg shadow-sm p-4 h-full
        transition-all duration-300 ease-in-out
        hover:scale-[1.02] hover:shadow-lg
      `}
    >
      <div
        className={`flex justify-between items-center border-b pb-2 mb-2 ${
          darkMode ? "border-gray-600" : "border-gray-300"
        }`}
      >
        <h3 className={`${darkMode ? "text-white" : "text-gray-700"} text-sm font-semibold`}>
          {title}
        </h3>

        {/*  pass darkMode */}
        <Dropdown darkMode={darkMode} />
      </div>

      {children}
    </div>
  );
};

export default Card;