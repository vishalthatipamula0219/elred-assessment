import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { TagsInput } from "react-tag-input-component";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const SoftSkills = ({ screen, setScreen }) => {
  const [skills, setSkills] = useState(
    JSON.parse(localStorage.getItem("skills")) || []
  );
  const [hobbies, setHobbies] = useState(
    JSON.parse(localStorage.getItem("hobbies")) || []
  );
  const [favouriteSubjects, setFavouriteSubjects] = useState(
    JSON.parse(localStorage.getItem("favouriteSubjects")) || []
  );

  if (screen === "editBio") {
    return null;
  }
  if (screen === "editSkills") {
    return (
      <Card>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ChevronLeftIcon
            onClick={() => setScreen("main")}
            sx={{ cursor: "pointer" }}
          />
          <Typography variant="h6">Skills</Typography>
        </Box>
        <Box sx={{ pt: 2, pl: 1, pr: 2 }}>
          <Typography variant="h6" sx={{ p: 2 }}>
            Iam incredible at these skills/ professionally great at
          </Typography>

          <TagsInput
            value={skills}
            onChange={setSkills}
            name="skills"
            placeHolder="Enter your skills"
          />
          <Typography variant="h6" sx={{ p: 2 }}>
            Hobbies i am passioante about
          </Typography>
          <TagsInput
            value={hobbies}
            onChange={setHobbies}
            name="hobbies"
            placeHolder="Enter your hobbies"
          />
          <Typography variant="h6" sx={{ p: 2 }}>
            My favourite subjects are
          </Typography>
          <TagsInput
            value={favouriteSubjects}
            onChange={setFavouriteSubjects}
            name="subjects"
            placeHolder="Enter your subjects"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "red", mt: 10, mb: 10 }}
              onClick={() => {
                setScreen("main");
                localStorage.setItem("skills", JSON.stringify(skills));
                localStorage.setItem("hobbies", JSON.stringify(hobbies));
                localStorage.setItem(
                  "favouriteSubjects",
                  JSON.stringify(favouriteSubjects)
                );
              }}
            >
              Save
            </Button>
          </div>
        </Box>
      </Card>
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
            Skills
          </Typography>
          <EditIcon
            onClick={() => setScreen("editSkills")}
            sx={{ cursor: "pointer" }}
          />
        </div>

        {skills.length > 0 ? (
          <Paper sx={{ p: 1, mb: 2 }}>
            <p style={{ padding: "10px", fontSize: "20px" }}>
              I am incredible at these skills/ professionally great at
            </p>
            {skills.map((skill) => {
              return (
                <Typography
                  variant="p"
                  sx={{
                    fontSize: 25,
                    display: "inline-block",
                    backgroundColor: "blue",
                    borderRadius: 2,
                    color: "white",
                    p: 1,
                  }}
                >
                  {skill}
                </Typography>
              );
            })}
          </Paper>
        ) : (
          <Paper>
            <Typography variant="h6" sx={{ mb: 2, p: 1 }}>
              No skills added yet
            </Typography>
          </Paper>
        )}
        {hobbies.length > 0 ? (
          <Paper sx={{ p: 1 }}>
            <p style={{ padding: "10px" }}>
              I am incredible at these skills/ professionally great at
            </p>
            {hobbies.map((skill) => {
              return (
                <Typography
                  variant="p"
                  sx={{
                    fontSize: 25,
                    display: "inline-block",
                    backgroundColor: "blue",
                    borderRadius: 2,
                  }}
                >
                  {hobbies}
                </Typography>
              );
            })}
          </Paper>
        ) : (
          <Paper>
            <Typography variant="h6" sx={{ mb: 2, p: 1 }}>
              Add hobbies
            </Typography>{" "}
          </Paper>
        )}
        {favouriteSubjects.length > 0 ? (
          <Paper sx={{ p: 1 }}>
            <p style={{ padding: "10px" }}>
              I am incredible at these skills/ professionally great at
            </p>
            {favouriteSubjects.map((skill) => {
              return (
                <Typography
                  variant="p"
                  sx={{
                    fontSize: 25,
                    display: "inline-block",
                    backgroundColor: "blue",
                    borderRadius: 2,
                  }}
                >
                  {favouriteSubjects}
                </Typography>
              );
            })}
          </Paper>
        ) : (
          <Paper>
            <Typography variant="h6" sx={{ mb: 2, p: 1 }}>
              Add favourite subjects
            </Typography>
          </Paper>
        )}
      </CardContent>
    </Card>
  );
};

export default SoftSkills;
