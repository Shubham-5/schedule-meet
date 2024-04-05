import React, { useState } from "react";

import PopupModal from "./components/PopupModal";
import ModalContent from "./components/PopupModal/ModalContent";
import { SchedulingProvider } from "./context/ScheduleContext";
import ScheduledSuccess from "./components/ScheduledSuccess";
import { LeftSection, RightSection } from "./components/ModalSection";

const App = () => {
  const [showModal, setShowModal] = useState(false);

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
              <ScheduledSuccess />
              <LeftSection />
              <RightSection />
            </ModalContent>
          </PopupModal>
        )}
      </div>
    </SchedulingProvider>
  );
};

export default App;
