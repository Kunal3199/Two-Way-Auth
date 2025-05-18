import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const TwoWayAuth = ({ length = 4 }) => {
  const [inputAuth, setInputAuth] = useState(new Array(length).fill(""));
  const ref = [useRef(), useRef(), useRef(), useRef()];
  useEffect(() => {
    console.log("inputAuth", ref);
    ref[0].current.focus();
  }, []);

  const handleChange = (e, i) => {
    console.log("iiiiii", e.target.value);
    if (!Number(e.target.value)) {
      return;
    }
    console.log("inputAuth", inputAuth);
    console.log("e.target.value", e.target.value);
    let updateOTP = [...inputAuth];
    updateOTP[i] = e.target.value[e.target.value.length - 1];
    setInputAuth(updateOTP);
    if (i < inputAuth.length - 1) {
      ref[i + 1].current.focus();
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.keyCode === 8) {
      let copyInput = [...inputAuth];
      copyInput[i] = "";
      setInputAuth(copyInput);
      if (i > 0) {
        ref[i - 1].current.focus();
      }
    }
  };
  const handleSubmit = () => {
    console.log("submot", inputAuth);
  };
  const InputBox = styled.div`
    width: "40px";
    height: "40px";
    padding: "5px";
    margin: "5px";
  `;
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {inputAuth.map((eachNum, i) => {
        return (
          <div key={i}>
            <input
              type="text"
              style={{
                width: "40px",
                height: "40px",
                padding: "5px",
                margin: "5px",
                textAlign: "center",
                fontSize: "20px",
              }}
              value={eachNum}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              //   maxLength={1}
              ref={ref[i]}
            ></input>
          </div>
        );
      })}
      <button
        style={{ padding: "10px", textAlign: "center", margin: "5px" }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default TwoWayAuth;
