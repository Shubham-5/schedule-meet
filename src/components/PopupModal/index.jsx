import { MdClose } from "react-icons/md";

export default function PopupModal(props) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={props.onModalClose}
      ></div>

      <button
        className="absolute right-10 p-2 top-8 z-50 text-white hover:text-gray-300 focus:outline-none"
        onClick={props.onModalClose}
      >
        <MdClose size={24} />
      </button>
      <div className="bg-white rounded-lg shadow-lg z-50 max-h-[80dvh] h-fit overflow-y-auto md:overflow-hidden">
        {props.title && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{props.title}</h2>
          </div>
        )}
        <div className="">{props.children}</div>
      </div>
    </div>
  );
}
