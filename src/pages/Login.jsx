import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import theme from "../styles/theme";

const styles = {
  screen: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "40px 24px 32px",
    minHeight: 667,
  },
  heading: {
    fontSize: 26,
    fontWeight: 700,
    color: "#1A1A1A",
    marginBottom: 8,
    lineHeight: 1.25,
  },
  subtitle: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 28,
    lineHeight: 1.6,
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 13,
    color: "#888",
  },
  footerLink: {
    fontSize: 13,
    color: theme.purple,
    fontWeight: 600,
    cursor: "pointer",
    marginLeft: 4,
  },
};

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div style={styles.screen}>
      <h1 style={styles.heading}>
        Signin to your<br />PopX account
      </h1>
      <p style={styles.subtitle}>
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <InputField
        label="Email Address"
        placeholder="Enter email address"
        type="email"
        value={email}
        onChange={setEmail}
      />
      <InputField
        label="Password"
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={setPassword}
      />

      <div style={{ marginTop: 8 }}>
        <Button
          label="Login"
          onClick={() => navigate("/settings")}
          variant={isValid ? "primary" : "disabled"}
        />
      </div>

      <div style={styles.footer}>
        <span style={styles.footerText}>Don't have an account?</span>
        <span style={styles.footerLink} onClick={() => navigate("/register")}>
          Create Account
        </span>
      </div>
    </div>
  );
}
