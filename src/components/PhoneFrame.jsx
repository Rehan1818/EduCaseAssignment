const styles = {
  frame: {
    width: 375,
    minHeight: 667,
    background: "#F4F5F7",
    borderRadius: 32,
    boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
};

export default function PhoneFrame({ children }) {
  return <div style={styles.frame}>{children}</div>;
}
