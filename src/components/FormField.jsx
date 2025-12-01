export const FormField = ({
  type = "text",
  placeholder,
  className = "",
  name,
  value,
  onChange,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`border px-3 py-1 rounded-md focus:outline-none shadow-sm placeholder:text-[#64748B] placeholder:text-sm ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-[#E2E8F0] focus:border-gray-300"
        } ${className}`}
        {...props}
      />
      {error && <span className="text-red-500 text-xs mt-0.5">{error}</span>}
    </div>
  );
};
