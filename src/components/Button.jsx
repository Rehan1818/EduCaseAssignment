import theme from "../styles/theme";

const variants = {
  primary: {
    background: theme.purple,
    color: "#fff",
    border: "none",
  },
  secondary: {
    background: theme.lightPurple,
    color: theme.purple,
    border: "none",
  },
  disabled: {
    background: theme.disabledBg,
    color: "#fff",
    border: "none",
    cursor: "not-allowed",
  },
};

const base = {
  width: "100%",
  padding: "14px",
  borderRadius: 8,
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  letterSpacing: 0.3,
  fontFamily: "inherit",
  transition: "opacity 0.2s",
};

export default function Button({ label, onClick, variant = "primary", style = {} }) {
  return (
    <button
      style={{ ...base, ...variants[variant], ...style }}
      onClick={variant !== "disabled" ? onClick : undefined}
      disabled={variant === "disabled"}
    >
      {label}
    </button>
  );
}
