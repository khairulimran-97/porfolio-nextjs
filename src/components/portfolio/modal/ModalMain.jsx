import React from "react";
import ModalThree from "./modal-by-id/ModalThree";

const ModalMain = ({ modalId, setGetModal }) => {
  return <ModalThree modalId={modalId} setGetModal={setGetModal} />;
};

export default ModalMain;
