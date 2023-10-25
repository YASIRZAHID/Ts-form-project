import React from "react";
import { BsFillExclamationSquareFill } from "react-icons/bs";

const CustomInput = ({
  id,
  name,
  type,
  placeholder,
  formik,
  label,
}:any) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full px-3 py-2 ${
          formik.touched[name] && formik.errors[name]
            ? "border-[#D8242A]"
            : "border-gray-600"
        } rounded`}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="flex justify-between">
          <div className="text-[#D8242A] mt-1">{formik.errors[name]}</div>
          <BsFillExclamationSquareFill className="text-[#D8242A] text-right mr-2 -translate-y-7 transition-all duration-300 ease-in-out" />
        </div>
      )}
    </div>
  );
};

export default CustomInput;
