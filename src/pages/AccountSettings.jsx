import { useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import Button from "../components/Button";

const styles = {
  screen: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 667,
    paddingTop: 32,
    paddingBottom: 28,
  },
  heading: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1A1A1A",
    margin: "0 0 20px 24px",
  },
  divider: {
    borderTop: "1px dashed #D9D9D9",
    marginBottom: 20,
  },
  profileRow: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "0 24px",
    marginBottom: 20,
  },
  name: {
    fontWeight: 700,
    fontSize: 15,
    color: "#1A1A1A",
    margin: "0 0 3px",
  },
  email: {
    fontSize: 13,
    color: "#888888",
    margin: 0,
  },
  bio: {
    fontSize: 13.5,
    color: "#888888",
    lineHeight: 1.7,
    padding: "0 24px",
  },
  spacer: {
    flex: 1,
  },
  btnWrap: {
    padding: "0 24px",
    marginTop: 24,
  },
};

export default function AccountSettings() {
  const navigate = useNavigate();

  return (
    <div style={styles.screen}>
      <h2 style={styles.heading}>Account Settings</h2>

      <div style={styles.divider} />

      <div style={styles.profileRow}>
        <Avatar showBadge={true} />
        <div>
          <p style={styles.name}>Marry Doe</p>
          <p style={styles.email}>Marry@Gmail.Com</p>
        </div>
      </div>

      <div style={styles.divider} />

      <p style={styles.bio}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
        Erat, Sed Diam
      </p>

      <div style={styles.spacer} />

      <div style={styles.btnWrap}>
        <Button
          label="← Back to Welcome"
          onClick={() => navigate("/")}
          variant="secondary"
        />
      </div>
    </div>
  );
}
