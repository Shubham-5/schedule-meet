import React from "react";

export default function ModalContent(props) {
  return (
    <div className="flex md:flex-row flex-col md:min-w-[30rem] max-w-[90dvw]">
      {props.children}
    </div>
  );
}
