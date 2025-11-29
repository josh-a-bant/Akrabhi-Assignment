export const Buttons = ({ children, className = "" }) => {
  return (
    <div
      className={`px-3 py-1 focus:outline-none focus:border-gray-500 border-gray-300/50 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};
