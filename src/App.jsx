import React, { useState } from "react";
import PopupModal from "./components/PopupModal";
import Calendar from "./components/Calendar";
import Button from "./components/Button";
import {
  FaArrowLeft,
  FaCalendar,
  FaCalendarAlt,
  FaCheckCircle,
  FaGoogle,
  FaRegCalendar,
  FaRegClock,
  FaRegUser,
  FaWindows,
} from "react-icons/fa";
import { IoEarthSharp, IoVideocamOutline } from "react-icons/io5";
import Input from "./components/Input";
import ModalContent from "./components/PopupModal/ModalContent";
import {
  SchedulingProvider,
  useScheduleState,
} from "./context/ScheduleContext";

const App = () => {
  const { showModal, setShowModal } = useScheduleState();

  const [date, setDate] = useState();
  const [time, setTime] = useState(null);
  const [step, setStep] = useState(0);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <SchedulingProvider>
      <div className="h-screen flex justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
        {showModal && (
          <PopupModal onModalClose={closeModal}>
            <ModalContent>
              {step === 3 && <ScheduledCard />}
              {step !== 3 && (
                <>
                  <LeftSection step={step} setStep={setStep} />
                  <RightSection
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    step={step}
                    setStep={setStep}
                  />
                </>
              )}
            </ModalContent>
          </PopupModal>
        )}
      </div>
    </SchedulingProvider>
  );
};

const LeftSection = ({ step, setStep }) => {
  return (
    <section className="max-w-xs">
      <div className="border-b p-6 flex items-center justify-center relative">
        {step >= 1 && (
          <Button
            className="absolute top-5 left-5 text-blue-500 border w-10 !rounded-full"
            onClick={() => setStep((prev) => prev - 1)}
          >
            <FaArrowLeft className="mx-auto" />
          </Button>
        )}
        <img
          src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/23272160/71632691.png"
          alt="logo"
          className="h-30 w-30 object-cover"
        />
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
              <span>12:00 - 12:45 Thursday, November 20 2024</span>
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

const RightSection = ({ date, setDate, time, setTime, step, setStep }) => {
  return (
    <>
      {step === 0 && (
        <section className="p-6 space-x-4 border-l flex">
          <div className="space-y-4">
            <h3 className="font-bold text-gray-700 text-lg">
              Select a Date & Time
            </h3>
            <Calendar
              date={date}
              setDate={setDate}
              availableDays={[
                "Wed Apr 17 2024",
                "Thu Apr 18 2024",
                "Fri Apr 19 2024",
              ]}
            />
            <div>
              <h3 className="font-semibold mb-1">Time zone</h3>
              <div className="flex items-center space-x-2 text-sm">
                <IoEarthSharp />
                <select>
                  <option value="12:00">India Standard Time(12:00pm)</option>
                </select>
              </div>
            </div>
          </div>
          {date && (
            <div className="mt-12 space-y-2 h-full pl-4">
              <h2 className="mb-6">Thursday, November 20</h2>
              <TimeOptions time={time} setTime={setTime} setStep={setStep} />
            </div>
          )}
        </section>
      )}

      {step === 1 && (
        <section className="p-6 border-l overflow-y-auto space-y-4 h-[80dvh] w-full pr-10">
          <h3 className="font-bold text-gray-700 text-lg">Enter Details</h3>
          <div className="space-y-4">
            <Input id="UserName" label="Name" required />
            <Input id="UserEmail" label="Email" type="email" required />

            <Button className="rounded-2xl border border-blue-600 text-blue-600 px-4 !h-9 text-sm font-medium">
              Add Guest
            </Button>

            <fieldset>
              <legend className="text-base font-medium text-gray-900">
                I want Fibery to work for:
              </legend>

              <div className="mt-4 space-y-2">
                <label
                  htmlFor="Option1"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-4 rounded border-gray-300"
                      id="Option1"
                    />
                  </div>

                  <span>John Clapton</span>
                </label>

                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-4 rounded border-gray-300"
                      id="Option2"
                    />
                  </div>

                  <span>Peter Mayer</span>
                </label>

                <label
                  htmlFor="Option3"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-4 rounded border-gray-300"
                      id="Option3"
                    />
                  </div>
                  <span> Eric King</span>
                </label>
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="Notes"
                className="block text-sm font-medium text-gray-900"
              >
                Please share anything that wil help prepare meeting
              </label>

              <textarea
                id="Notes"
                className="mt-2 w-full rounded-lg border p-2 border-gray-200 align-top shadow-sm sm:text-sm"
                rows="3"
              ></textarea>
            </div>
            <Button className="rounded-2xl mt-4 bg-blue-600 px-4 text-white font-medium">
              Schedule Event
            </Button>
          </div>
        </section>
      )}
    </>
  );
};

const TimeOptions = ({ time, setTime, setStep }) => {
  const timeOptions = [
    "8:00am",
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
  ];

  return (
    <div className="flex-col w-full space-y-2 h-[56dvh] overflow-y-auto overflow-x-hidden">
      {timeOptions.map((t) => (
        <div key={t} className="space-y-2" onClick={() => setTime(t)}>
          {time !== t && (
            <Button className="border border-blue-500 block text-blue-500 w-full h-12 font-semibold hover:border-2">
              {t}
            </Button>
          )}
          {time === t && (
            <div className="grid grid-cols-2 space-x-1 w-full">
              <Button className="font-semibold bg-gray-600 text-white h-12">
                {time}
              </Button>
              <Button
                className="bg-blue-500 text-white h-12 font-semibold"
                onClick={() => setStep((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;

function ScheduledCard() {
  return (
    <div className="flex flex-col justify-center p-4 gap-2">
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
