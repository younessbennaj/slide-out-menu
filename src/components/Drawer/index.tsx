import React from "react";
import styles from "./Drawer.module.css";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { useEscapeKey } from "../../hooks/useEscapeKey";

function Drawer({
  children,
  onOpenChange,
}: {
  children: React.ReactNode;
  onOpenChange: (isOpen: boolean) => void;
}) {
  useEscapeKey(() => {
    onOpenChange(false);
  });
  return (
    <div className={styles.drawerContainer}>
      <div
        className={styles.overlay}
        onClick={() => {
          onOpenChange(false);
        }}
      ></div>
      <FocusLock returnFocus>
        <RemoveScroll>
          <div className={styles.drawer}>
            <div>{children}</div>
            <button
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Close
            </button>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}

export default Drawer;
