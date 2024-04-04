import React from "react";

export default function Input(props) {
  return (
    <div>
      <label
        htmlFor={props.id ?? props.label}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
        {props.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={props.type ?? "text"}
        id={props.id ?? props.label}
        className="mt-1 w-full rounded-md border h-10 px-2 border-gray-500 focus:border-blue-500 focus:border-2 outline-none shadow-sm sm:text-sm"
        {...props}
      />
    </div>
  );
}
