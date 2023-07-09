import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Card, TextField, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const EthicalCode = ({ screen, setScreen }) => {
  const [searchValue, setSearchValue] = useState("");
  const [ethicalData, setEthicalData] = useState({
    result: [],
  });
  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const { data } = await axios.get(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsEthicalCodeResponse.json"
    );
    setEthicalData(data);
    
  };

  if (screen === "viewEthicalData") {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ mt: 0 }}>
            {ethicalData.ethicalCodeCount}{" "}
            <span style={{ color: "grey" }}>
              say has ethical code of condu...
            </span>
          </Typography>
          <CancelIcon onClick={() => setScreen("main")} />
        </div>

        <TextField
          label="search"
          variant="outlined"
          sx={{ width: "100%", pb: 2 }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        />
        {ethicalData.result
          .filter((item) => {
            return (
              item.firstname.toLowerCase().includes(searchValue) ||
              item.lastname.toLowerCase().includes(searchValue)
            );
          })
          .map((item) => {
            return (
              <Card sx={{}}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={item.dpURL} sx={{ m: 1 }} />
                  <p>
                    {item.firstname} {item.lastname}
                  </p>
                </div>
                <p style={{ marginLeft: "10px" }}> {item.title[0].value}</p>
              </Card>
            );
          })}
      </>
    );
  }

  if (screen === "viewVirtualData") {
    return null;
  }

  return (
    <div
      style={{
        color: "white",
        fontSize: "20px",
        display: "flex",
        cursor: "pointer",
      }}
      onClick={() => setScreen("viewEthicalData")}
    >
      <p style={{ marginRight: "10px", paddingLeft: "5px" }}>
        {ethicalData.ethicalCodeCount}
      </p>
      <p>say has ethical code of conduct and is safe to do business with</p>
    </div>
  );
};

export default EthicalCode;
