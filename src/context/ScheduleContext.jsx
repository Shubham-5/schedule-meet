import React, { createContext, useState } from "react";

const SchedulingContext = createContext({
  step: 0,
  date: null,
  time: null,
  showModal: false,
  setShowModal: () => {},
  setDate: () => {},
  setTime: () => {},
  setStep: () => {},
});

const SchedulingProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const value = {
    step,
    date,
    time,
    showModal,
    setDate,
    setTime,
    setStep,
    setShowModal,
  };

  return (
    <SchedulingContext.Provider value={value}>
      {children}
    </SchedulingContext.Provider>
  );
};

export { SchedulingContext, SchedulingProvider };
