import React from "react";
import styles from "./Drawer.module.css";
import FocusLock from "react-focus-lock";

function Drawer({
  children,
  onOpenChange,
}: {
  children: React.ReactNode;
  onOpenChange: (isOpen: boolean) => void;
}) {
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    const currentlyFocusedElem = document.activeElement as HTMLElement;

    closeBtnRef.current?.focus();

    return () => {
      currentlyFocusedElem?.focus();
    };
  }, []);
  return (
    <div className={styles.drawerContainer}>
      <div
        className={styles.overlay}
        onClick={() => {
          onOpenChange(false);
        }}
      ></div>
      <FocusLock>
        <div className={styles.drawer}>
          <div>{children}</div>
          <button
            onClick={() => {
              onOpenChange(false);
            }}
            ref={closeBtnRef}
          >
            Close
          </button>
        </div>
      </FocusLock>
    </div>
  );
}

export default Drawer;
