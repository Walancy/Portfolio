import React, { useRef, useEffect } from "react";
import "./modalItens.css";

export default function ModalItens({ isOpen, children, onClose }) {
  const modalRef = useRef();

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    isOpen && (
      <div className="itens" ref={modalRef}>
        <div className="botoes">{children}</div>
      </div>
    )
  );
}