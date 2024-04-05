import { useContext } from "react";
import {
  FaCheckCircle,
  FaGoogle,
  FaRegCalendar,
  FaRegUser,
  FaWindows,
} from "react-icons/fa";
import { IoEarthSharp, IoVideocamOutline } from "react-icons/io5";

import { SchedulingContext } from "../../context/ScheduleContext";
import Button from "../Button";

export default function ScheduledSuccess() {
  const { step } = useContext(SchedulingContext);

  if (step !== 3) return null;

  return (
    <div className="flex flex-col justify-center mx-auto p-6 gap-2">
      <div className="flex justify-center">
        <img
          alt="profile pic"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          class="size-14 mb-2 rounded-full object-cover shadow-sm"
        />
      </div>

      <h2 className="font-bold text-lg flex justify-center items-center">
        <FaCheckCircle className="mr-2 text-green-700" /> You are scheduled
      </h2>

      <p className="text-center text-sm">
        A calendar invite sent to your email address
      </p>

      <div className="border border-gray-400 rounded-md space-y-2 p-4">
        <h3 className="font-semibold text-left">Fibery Demo</h3>
        <p className="flex space-x-1.5 items-center text-gray-600 font-medium text-sm">
          <FaRegUser /> <span>John Doe</span>
        </p>
        <p className="flex space-x-1.5 items-center text-gray-600 font-medium text-sm">
          <FaRegCalendar />{" "}
          <span>12:00 - 12:45 Thursday, November 20 2024</span>
        </p>
        <p className="flex space-x-1.5 items-center text-gray-600 font-medium text-sm">
          <IoEarthSharp /> <span>India Standard Time</span>
        </p>
        <p className="flex space-x-1.5 items-center text-gray-600 font-medium text-sm">
          <IoVideocamOutline /> <span>Web conferecing details to follow</span>
        </p>
      </div>

      <hr className="my-6" />

      <h3 className="font-semibold">
        Schedule your meeting with calendly with free
      </h3>
      <p className="text-sm -mt-1">
        Eliminate the back-and-forth emails for finding time
      </p>

      <div className="grid gap-2 md:grid-cols-2 mt-2">
        <Button className="border border-gray-700 rounded-2xl flex items-center px-4 text-xs">
          <FaGoogle className="mr-2 text-blue-500" />
          Sign in with Google
        </Button>
        <Button className="border border-gray-700 rounded-2xl flex items-center px-4 text-xs">
          <FaWindows className="mr-2 text-blue-500" />
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
