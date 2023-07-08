import { FormControl, MenuItem, Select, Button } from "@mui/material";
import React, { useState } from "react";

const BloodGroup = ({
  screen,
  setScreen,
  bloodGroup,
  setBloodGroup,
  aboutMe,
}) => {
  const bloodGroupArray = [
    "B positive (B+)",
    "A positive (A+)",
    "O positive (O+)",
    "A negative (A-)",
  ];

  if (screen === "editBio") {
    return (
      <div>
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          Blood Group
        </div>
        <div style={{ padding: "10px" }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              {bloodGroupArray.map((group) => (
                <MenuItem value={group}>{group}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{ backgroundColor: "red", borderRadius: 2, mt: 10, mb: 10 }}
            onClick={() => {
              localStorage.setItem("aboutMe", aboutMe);
              localStorage.setItem("bloodGroup", bloodGroup);
            }}
          >
            Save
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "10px",
      }}
    >
      <div>Blood group</div>
      <div style={{ color: "grey" }}>{bloodGroup || "select"}</div>
    </div>
  );
};

export default BloodGroup;
