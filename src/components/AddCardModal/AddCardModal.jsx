import React, { useState } from "react";
import "rodal/lib/rodal.css";
import css from "./AddCardModal.module.css";
import Rodal from "rodal";
const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
  const customStyles = {
    background: "rgb(58 58 58)",
    padding: "20px",
    width: "50%",
    top: "-3rem",
    height: "fit-content",
    maxWidth: "40rem",
  };
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  return (
    <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
      <div className={css.container}>
        <div>
          <span className={css.label}>Card Title</span>
          <input
            type="text"
            className={css.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <span className={css.label}>Detaile</span>
          <textArea
            rows={10}
            className={css.input}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            type="text"
          />
        </div>
        <button
          onClick={() => {
            handleCardAdd(title, detail);
            setDetail("");
            setDetail("");
          }}
          className={css.saveButton}
          disabled={title === "" && detail === ""}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
};

export default AddCardModal;
