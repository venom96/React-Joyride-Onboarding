import { Button } from "@mui/material";
import React, { useRef } from "react";
const contStyle = {
  border: "solid Orange 1px",
  windth: "100%",
  padding: "20px",
  marginTop: "100px",
};

type Props = {
  handleCallbackFlow: Function;
};

const JoyrideSteps: React.FC<Props> = ({ handleCallbackFlow }) => {
  const menu = useRef<HTMLButtonElement>(null);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/* <div
          style={contStyle}
          className="first-step"
          onClick={() => handleCallbackFlow}
        >
          Step: 1
        </div> */}
        <div
          style={contStyle}
          className="first-step"
          // onClick={() => handleCallbackFlow}
        >
          Step: 1
        </div>
        <div style={contStyle} className="second-step">
          Step: 2
        </div>
        <div style={contStyle} className="fourth-step">
          Step: 4
        </div>
        <div style={contStyle} className="third-step">
          Step: 3
        </div>
      </div>
    </>
  );
};

export default JoyrideSteps;
