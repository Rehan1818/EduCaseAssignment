import theme from "../styles/theme";

const styles = {
  wrapper: {
    marginBottom: 16,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  label: {
    fontSize: 11,
    fontWeight: 700,
    color: theme.purple,
    letterSpacing: 0.3,
  },
  input: {
    width: "100%",
    padding: "11px 13px",
    border: `1px solid ${theme.border}`,
    borderRadius: 8,
    fontSize: 14,
    color: theme.text,
    background: theme.white,
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  },
};

export default function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}) {
  return (
    <div style={styles.wrapper}>
      <label style={styles.label}>
        {label}
        {required && "*"}
      </label>
      <input
        style={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
