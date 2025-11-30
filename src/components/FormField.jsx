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
      className={`border px-3 py-1 rounded-md focus:outline-none focus:border-gray-300 border-[#E2E8F0] shadow-sm placeholder:text-[#64748B] placeholder:text-sm ${className}`}
      {...(register && name ? register(name) : {})}
      {...props}
    />
  );
};
