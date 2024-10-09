import React from "react";
import styles from "./Drawer.module.css";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { AnimatePresence, motion } from "framer-motion";

function Drawer({
  children,
  onOpenChange,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}) {
  useEscapeKey(() => {
    onOpenChange(false);
  });
  return (
    <>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => {
            onOpenChange(false);
          }}
        ></div>
      )}
      <RemoveScroll enabled={isOpen} forwardProps>
        <AnimatePresence>
          {isOpen ? (
            <div className={styles.drawerContainer}>
              <FocusLock returnFocus>
                <motion.div
                  className={styles.drawer}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                  exit={{ x: "100%" }}
                >
                  <div>{children}</div>
                  <button
                    onClick={() => {
                      onOpenChange(false);
                    }}
                  >
                    Close
                  </button>
                </motion.div>
              </FocusLock>
            </div>
          ) : null}
        </AnimatePresence>
      </RemoveScroll>
    </>
  );
}

export default Drawer;
