import React from "react";

export function useEscapeKey(callback: () => void) {
  React.useEffect(() => {
    function handleKeyDown(
      event: React.KeyboardEvent<HTMLElement> | KeyboardEvent
    ) {
      if (event.code === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}
