import React from "react";

function Logo({ id, frameNo, alternative , style }) {
  return (
    <>
      <Abc id="firshirtImg" />
      {/* <div className="photos"> */}
      <img src={frameNo} alt={alternative} id={id} style={{style}} />
      {/* </div> */}
    </>
  );
}

function Abc({ id }) {
  return (
    <div className="component" id={id}>
      <div className="photos"></div>
    </div>
  );
}

export default Logo;
