import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Card, TextField } from "@mui/material";

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
    console.log("ethical", data);
  };

  if (screen === "viewEthicalData") {
    return (
      <>
      
        <TextField
          type="search"
          placeholder="search"
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
        
      }}
      onClick={() => setScreen("viewEthicalData")}
    >
      <p >{ethicalData.ethicalCodeCount}</p>
      <p style={{width:"1000px"}}>say has ethical code of conduct and is safe to do business with</p>
    </div>
  );
};

export default EthicalCode;
