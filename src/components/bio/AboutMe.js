import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";

export default function AboutMe({ screen, setScreen, aboutMe, setAboutMe }) {
  if (screen === "editBio") {
    return (
      <div>
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          Write Somehting about yourself?
        </div>
        <div style={{ padding: "10px" }}>
          <textarea
            rows="5"
            cols="45"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </div>
      </div>
    );
  }

  return (
    <Card sx={{ minWidth: 275, mt: 3 }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <Typography variant="h5" component="div">
            About Me
          </Typography>
          <EditIcon onClick={() => setScreen("editBio")} />
        </div>

        <Typography variant="body2" sx={{ textAlign: "center", color: "grey" }}>
          {aboutMe || "write about yourself?"}
        </Typography>
      </CardContent>
    </Card>
  );
}
