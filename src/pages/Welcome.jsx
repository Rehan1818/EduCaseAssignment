import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const styles = {
  screen: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "40px 24px 40px",
    minHeight: 667,
  },
  spacer: {
    flex: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: 700,
    color: "#1A1A1A",
    marginBottom: 10,
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 32,
    lineHeight: 1.6,
  },
  btnGap: {
    marginBottom: 12,
  },
};

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={styles.screen}>
      <div style={styles.spacer} />
      <h1 style={styles.heading}>Welcome to PopX</h1>
      <p style={styles.subtitle}>
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>
      <div style={styles.btnGap}>
        <Button label="Create Account" onClick={() => navigate("/register")} variant="primary" />
      </div>
      <Button label="Already Registered? Login" onClick={() => navigate("/login")} variant="secondary" />
    </div>
  );
}
