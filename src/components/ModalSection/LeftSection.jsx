import { useContext } from "react";
import { FaArrowLeft, FaRegCalendar, FaRegClock } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";

import Button from "../Button";
import { SchedulingContext } from "../../context/ScheduleContext";
import { formatDate } from "../../utils/formatter";

export const LeftSection = () => {
  const { step, setStep, time, date } = useContext(SchedulingContext);

  if (step === 3) return null;

  return (
    <section className="md:max-w-xs">
      <div className="border-b p-6 flex items-center justify-center relative">
        {step >= 1 && (
          <Button
            className="absolute top-5 left-5 text-blue-500 border w-10 !rounded-full"
            onClick={() => setStep((prev) => prev - 1)}
          >
            <FaArrowLeft className="mx-auto" />
          </Button>
        )}
        <div className="h-20 w-20">
          <img
            src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/23272160/71632691.png"
            alt="logo"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="p-6 space-y-4 h-full">
        <h2 className="font-bold text-xl text-gray-700">Fibery Demo</h2>
        <p className="flex space-x-1.5 items-center text-gray-600 font-medium text-sm">
          <FaRegClock /> <span>45 min</span>
        </p>
        {step >= 1 && (
          <>
            <p className="flex space-x-1.5 items-center text-gray-600 font-medium text-sm">
              <FaRegCalendar />
              <span>
                {time}- 12:45 {formatDate(date)}
              </span>
            </p>
            <p className="flex space-x-1.5 items-center text-gray-600 font-medium text-sm">
              <IoEarthSharp /> <span>India Standard Time</span>
            </p>
          </>
        )}
        <p className="text-sm">
          Book a meeting with our Fibery team. Talk to a real person about how
          to get processes set up with us or not
        </p>
      </div>
    </section>
  );
};
