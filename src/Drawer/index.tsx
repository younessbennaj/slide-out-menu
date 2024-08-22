import styles from "./Drawer.module.css";

function Drawer({
  children,
  isOpen,
  onOpenChange,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}) {
  return (
    <div className={styles.drawerContainer}>
      <div
        className={styles.overlay}
        style={{
          display: isOpen ? "block" : "none",
        }}
        onClick={() => {
          onOpenChange(false);
        }}
      ></div>
      <div
        className={styles.drawer}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <button
          onClick={() => {
            onOpenChange(false);
          }}
        >
          Close
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Drawer;
