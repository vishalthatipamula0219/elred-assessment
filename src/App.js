import Bio from "./components/partA/Bio";
import AboutMe from "./components/partA/AboutMe";
import BloodGroup from "./components/partA/BloodGroup";
import Resume from "./components/partA/Resume";
import { useState } from "react";
import EthicalCode from "./components/partC/EthicalCode";
import VirtuallyMet from "./components/partC/VirtuallyMet";
import SoftSkills from "./components/partB/SoftSkills";

function App() {
  const [screen, setScreen] = useState("main");
  const [aboutMe, setAboutMe] = useState(localStorage.getItem("aboutMe") || "");
  const [bloodGroup, setBloodGroup] = useState(
    localStorage.getItem("bloodGroup") || "B positive (B+)"
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ width: "375px", height: "812px" }}>
        {["main", "editBio", "editSkills"].includes(screen) && (
          <>
            <Bio screen={screen} setScreen={setScreen} />
            <AboutMe
              screen={screen}
              setScreen={setScreen}
              aboutMe={aboutMe}
              setAboutMe={setAboutMe}
            />
            <Resume screen={screen} setScreen={setScreen} />
            <BloodGroup
              screen={screen}
              setScreen={setScreen}
              bloodGroup={bloodGroup}
              setBloodGroup={setBloodGroup}
              aboutMe={aboutMe}
            />
            <SoftSkills screen={screen} setScreen={setScreen} />
          </>
        )}

        <div style={{ backgroundColor: screen === "main" ? "grey" : "" }}>
          <p
            style={{ color: screen === "main" ? "white" : "", padding: "15px" }}
          >
            {screen === "main" ? "Ratings" : ""}
          </p>

          <EthicalCode screen={screen} setScreen={setScreen} />
          <VirtuallyMet screen={screen} setScreen={setScreen} />
        </div>
      </div>
    </div>
  );
}

export default App;
