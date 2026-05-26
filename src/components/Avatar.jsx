import theme from "../styles/theme";

const styles = {
  wrapper: {
    position: "relative",
    flexShrink: 0,
    display: "inline-block",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    overflow: "hidden",
    background: "#c4a882",
  },
  badge: {
    position: "absolute",
    bottom: 0,
    right: -2,
    width: 20,
    height: 20,
    background: theme.purple,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #F4F5F7",
  },
};

function CameraIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path
        d="M11 9.5a1 1 0 01-1 1H2a1 1 0 01-1-1v-6a1 1 0 011-1h1.5l1-1.5h3l1 1.5H10a1 1 0 011 1v6z"
        stroke="#fff"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="6" cy="6.5" r="1.8" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}

function DefaultAvatar() {
  return (
    <svg viewBox="0 0 60 60" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" fill="#c4a882" />
      <circle cx="30" cy="22" r="12" fill="#8B5E3C" />
      <ellipse cx="30" cy="52" rx="20" ry="14" fill="#8B5E3C" />
      <circle cx="30" cy="22" r="10" fill="#D4956A" />
    </svg>
  );
}

export default function Avatar({ src, showBadge = true }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.circle}>
        {src ? (
          <img src={src} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <DefaultAvatar />
        )}
      </div>
      {showBadge && (
        <div style={styles.badge}>
          <CameraIcon />
        </div>
      )}
    </div>
  );
}
