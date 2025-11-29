export const FormField = ({
  type = "text",
  placeholder,
  className = "",
  register,
  name,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border px-3 py-1 rounded-md focus:outline-none focus:border-gray-500 border-gray-300/60 ${className}`}
      {...(register && name ? register(name) : {})}
      {...props}
    />
  );
};
