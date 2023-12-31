import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Card, TextField, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const VirtuallyMet = ({ screen, setScreen }) => {
  const [virtualData, setvirtualData] = useState({ result: [] });
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    dataFetch();
  }, []);
  const dataFetch = async () => {
    const { data } = await axios.get(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsVirtuallyMetResponse.json"
    );
    setvirtualData(data);
  };
  if (screen === "viewVirtualData") {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ mt: 0 }}>
            {virtualData.virtuallyMetCount}
            <span style={{ color: "grey" }}>
              have met in real life/video call
            </span>
          </Typography>
          <CancelIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setScreen("main")}
          />
        </div>

        <TextField
          label="search"
          variant="outlined"
          sx={{ width: "100%", pb: 2 }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        />

        {virtualData.result
          .filter((item) => {
            return (
              item.firstname.toLowerCase().includes(searchValue) ||
              item.lastname.toLowerCase().includes(searchValue)
            );
          })
          .map((item) => {
            return (
              <Card>
                <div style={{ display: "flex" }}>
                  <Avatar src={item.dpURL} sx={{ mr: 2 }} />
                  <p>
                    {item.firstname} {item.lastname}
                  </p>
                </div>
                <p> {item.title[0].value}</p>
              </Card>
            );
          })}
      </>
    );
  }

  return (
    <div
      style={{
        color: "white",
        fontSize: "20px",
        display: "flex",
        cursor: "pointer",
      }}
      onClick={() => setScreen("viewVirtualData")}
    >
      <p style={{ paddingLeft: "5px" }}>{virtualData.virtuallyMetCount}</p>
      <p style={{ marginLeft: "10px" }}>Have met in life/video call</p>
    </div>
  );
};

export default VirtuallyMet;
