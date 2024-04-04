import React from "react";

export default function Button(props) {
  return (
    <button
      className={`h-10 text-center rounded-md block ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
