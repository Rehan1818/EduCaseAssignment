import theme from "../styles/theme";

const styles = {
  label: {
    fontSize: 13,
    fontWeight: 500,
    color: "#1A1A1A",
    marginBottom: 10,
  },
  row: {
    display: "flex",
    gap: 24,
  },
  option: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    fontSize: 14,
    color: "#1A1A1A",
    userSelect: "none",
  },
};

function RadioCircle({ selected }) {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        border: `2px solid ${selected ? theme.purple : theme.border}`,
        background: selected ? theme.purple : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s",
      }}
    >
      {selected && (
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />
      )}
    </div>
  );
}

export default function RadioGroup({ legend, options, value, onChange }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <p style={styles.label}>{legend}</p>
      <div style={styles.row}>
        {options.map((opt) => (
          <div key={opt.value} style={styles.option} onClick={() => onChange(opt.value)}>
            <RadioCircle selected={value === opt.value} />
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
}
