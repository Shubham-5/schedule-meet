import React, { createContext, useContext, useState } from "react";

const SchedulingContext = createContext({
  step: 0,
  date: null,
  time: null,
  showModal: false,
  setDate: () => {},
  setTime: () => {},
  setStep: () => {},
  closeModal: () => {},
  openModal: () => {},
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

const useScheduleState = () => useContext(SchedulingContext);

export { useScheduleState, SchedulingProvider };
