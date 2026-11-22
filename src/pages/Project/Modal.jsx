import React, { useEffect } from "react";
export default function Modal({ children, estado, cambiarEstado }) {
  useEffect(() => {
    if (!estado) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") cambiarEstado(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [estado, cambiarEstado]);
  if (!estado) return null;
  return (
    <div
      className="overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) cambiarEstado(false);
      }}
      role="presentation"
    >
      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-label="Project details"
      >
        <button
          type="button"
          className="boton-cerrar"
          onClick={() => cambiarEstado(false)}
          aria-label="Close project details"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
