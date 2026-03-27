type Props = {
  darkMode: boolean;
};

const Footer = ({ darkMode }: Props) => {
    const bg = darkMode ? "bg-gray-600" : "bg-gray-100";
  const text = darkMode ? "text-white" : "text-neutral-600";
  return (
    <footer
      className={`
        w-full 
       ${bg}
        shadow-lg
        px-4 sm:px-6 
        py-3 
        flex 
        items-center 
        justify-center sm:justify-start
        text-center sm:text-left
      `}
    >
      <p className={` ${text} text-sm sm:text-base tracking-wide`}>
        Copyright © 2025 Inbest.
      </p>
    </footer>
  );
};

export default Footer;