import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Bio = ({ screen, setScreen }) => {
  if (screen === "editSkills") {
    return null;
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ChevronLeftIcon
        onClick={() => setScreen(screen === "main" ? "editBio" : "main")}
      />
      {screen === "main" ? "Bio" : "My Bio"}
    </div>
  );
};

export default Bio;
