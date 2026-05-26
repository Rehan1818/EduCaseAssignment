import "./styles/global.css";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#E8E8E8",
      }}
    >
      <AppRouter />
    </div>
  );
}
