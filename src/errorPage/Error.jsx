import React, { useRef } from "react";

const Error = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  const style = {
    container: {
        color: "white",
        display: "flex",
        alignItems: 'center',
        flexDirection: "column",
        width: '60%',
        margin: '10% auto',
        gap: '40px'
    },
    Btn: {
        color: 'white',
        background: 'blue',
        padding: "8px 30px",
        border: 'none',
        borderRadius: "4px"
    }
  }

  return (
    <div style={style.container}>
      <h1>No Connection</h1>
      <p>Please check your Internet connectivity and try again.</p>
      <button style={style.Btn} onClick={handleRetry}>Retry</button>
    </div>
  );
};

export default Error;
