import React from "react";
import data from "../data/data.json";

const CatFacts = () => {
  return (
    <div>
      {data.map((catfact) => (
        <p data-testid="catFact" key={catfact._id}>
          {catfact.text}
        </p>
      ))}
    </div>
  );
};

export default CatFacts;
