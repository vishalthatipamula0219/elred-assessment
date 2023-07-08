import Bio from "./components/bio/Bio";
import AboutMe from "./components/bio/AboutMe";
import BloodGroup from "./components/bio/BloodGroup";
import Resume from "./components/bio/Resume";
import { useState } from "react";
import EthicalCode from "./components/partC/EthicalCode";
import VirtuallyMet from "./components/partC/VirtuallyMet";

function App() {
  const [screen, setScreen] = useState("main");
  const [aboutMe, setAboutMe] = useState("");
  const [bloodGroup, setBloodGroup] = useState("B positive (B+)");

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
        <Bio screen={screen} setScreen={setScreen} />
        {["main", "editBio"].includes(screen) && (
          <>
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
          </>
        )}

        <div style={{ backgroundColor: screen === "main" ? "grey" : "" }}>
          <p
            style={{ color: screen === "main" ? "white" : "", padding: "15px" }}
          >
            Ratings
          </p>

          <EthicalCode screen={screen} setScreen={setScreen} />
          <VirtuallyMet screen={screen} setScreen={setScreen} />
        </div>
      </div>
    </div>
  );
}

export default App;
