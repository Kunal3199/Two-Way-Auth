import React, { useRef, useState } from "react";

const VScodeStructure = ({ ArrayStructure = struct }) => {
  // const [showChild, setHideFun] = useState(false);
  const [ShowFileFolder, setNew] = useState(ArrayStructure);
  return (
    <div>
      {ShowFileFolder.map((Obj) => (
        <div>
          {Obj.isFolder ? (
            <div style={{ marginLeft: "20px" }}>
              <div
                style={{
                  display: "flex",
                  //   margin: "20px",
                  "align-items": "center",
                }}
              >
                <h4
                  style={{ margin: "10px" }}
                  onClick={() => {
                    // setHideFun((prev) => !prev);
                    Obj.isVisible = !Obj.isVisible ? true : false;
                    const cpyArray = [...ShowFileFolder];
                    setNew(cpyArray);
                    console.log("ArrayStructure", ArrayStructure);
                  }}
                >
                  {Obj.name}
                </h4>
                <div>
                  <button
                    style={{
                      margin: "0 10px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      Obj.openInput = true;
                      const cpyArr = [...ShowFileFolder];
                      setNew(cpyArr);
                      console.log("aaaaaa", cpyArr);
                    }}
                  >
                    + Folder
                  </button>
                  <button
                    style={{
                      //   margin: "0 10px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      console.log("ooooo", Obj);
                    }}
                  >
                    + File
                  </button>
                </div>
                {Obj.openInput && (
                  <div>
                    <input
                      type="text"
                      onKeyDown={(e) => {
                        if (e.keyCode == 13) {
                          Obj.childComponent = [
                            ...Obj.childComponent,
                            { name: e.target.value, isFolder: true },
                          ];
                          Obj.openInput = false;
                        }
                      }}
                    />
                  </div>
                )}
              </div>
              {Obj.isVisible && (
                <VScodeStructure ArrayStructure={Obj.childComponent} />
              )}
            </div>
          ) : (
            <div
              style={{
                // margin: "20px",
                marginLeft: "20px",
                "align-items": "center",
              }}
            >
              <h4 style={{ margin: "10px" }}>{Obj.name}</h4>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VScodeStructure;
