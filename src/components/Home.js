import React, { useState } from "react";

const Home = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="home">
      {!clicked && (
        <button className="home-btn neon" id="click-here" onClick={handleClick}>
          Enter
        </button>
      )}
      {clicked && (
        <>
          <h1>FrontEnd Recap</h1>
          <p>Today we'll be focusing on:</p>
          <ul>
            <li>React Router</li>
            <li>React Testing library</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
