/* eslint-disable react/prop-types */
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/16/solid";

const Notifications = ({ type, message, description, onClose }) => {
  const typeStyles = {
    success: "text-green-500",
    error: "text-red-500",
    info: "text-yellow-500",
  };
  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md flex items-start space-x-3 border border-gray-200 absolute top-5 right-[39%]">
      <CheckCircleIcon className={`h-6 w-6 ${typeStyles[type]}`} />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{message}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Notifications;
