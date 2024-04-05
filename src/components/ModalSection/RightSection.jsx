import { useContext } from "react";
import { IoEarthSharp } from "react-icons/io5";

import Button from "../Button";
import Input from "../Input";
import Calendar from "../Calendar";
import { SchedulingContext } from "../../context/ScheduleContext";
import { formatDate } from "../../utils/formatter";

export const RightSection = () => {
  const { date, setDate, time, setTime, step, setStep } =
    useContext(SchedulingContext);

  function handleScheduleMeet() {
    setStep(3);
  }

  return (
    <>
      {step === 0 && (
        <section className="p-6 md:space-x-4 border-l flex flex-col md:flex-row">
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
            <div className="mt-12 space-y-2 h-full md:pl-4 md:w-44">
              <h2 className="mb-6">{formatDate(date)}</h2>
              <TimeOptions time={time} setTime={setTime} setStep={setStep} />
            </div>
          )}
        </section>
      )}

      {step === 1 && (
        <section className="p-6 border-l md:overflow-y-auto space-y-4 max-h-[80dvh] w-full md:pr-10">
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
            <Button
              className="rounded-2xl mt-4 bg-blue-600 px-4 text-white font-medium"
              onClick={handleScheduleMeet}
            >
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
