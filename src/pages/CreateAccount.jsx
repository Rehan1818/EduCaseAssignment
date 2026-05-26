import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import RadioGroup from "../components/RadioGroup";
import theme from "../styles/theme";

const styles = {
  screen: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "40px 24px 32px",
    minHeight: 667,
    overflowY: "auto",
  },
  headerRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 24,
  },
  heading: {
    fontSize: 26,
    fontWeight: 700,
    color: "#1A1A1A",
    lineHeight: 1.25,
    margin: 0,
  },
  badge: {
    background: theme.yellow,
    color: "#fff",
    borderRadius: "50%",
    width: 26,
    height: 26,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 14,
    flexShrink: 0,
    marginTop: 4,
  },
};

const agencyOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

export default function CreateAccount() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const setField = (key) => (val) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  return (
    <div style={styles.screen}>
      <div style={styles.headerRow}>
        <h1 style={styles.heading}>
          Create your<br />PopX account
        </h1>
        <div style={styles.badge}>1</div>
      </div>

      <InputField
        label="Full Name"
        placeholder="Marry Doe"
        value={form.fullName}
        onChange={setField("fullName")}
        required
      />
      <InputField
        label="Phone number"
        placeholder="Marry Doe"
        type="tel"
        value={form.phone}
        onChange={setField("phone")}
        required
      />
      <InputField
        label="Email address"
        placeholder="Marry Doe"
        type="email"
        value={form.email}
        onChange={setField("email")}
        required
      />
      <InputField
        label="Password"
        placeholder="Marry Doe"
        type="password"
        value={form.password}
        onChange={setField("password")}
        required
      />
      <InputField
        label="Company name"
        placeholder="Marry Doe"
        value={form.company}
        onChange={setField("company")}
      />

      <RadioGroup
        legend="Are you an Agency?*"
        options={agencyOptions}
        value={form.isAgency}
        onChange={setField("isAgency")}
      />

      <Button
        label="Create Account"
        onClick={() => navigate("/settings")}
        variant="primary"
      />
    </div>
  );
}
