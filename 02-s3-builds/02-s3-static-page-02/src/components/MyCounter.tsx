import React, { useState } from "react";

const MyCounter = () => {
  const [counter, setCounter] = useState(0);

  const buttonsInfo = {
    increase: 1,
    decrease: -1,
  };

  const buttonNames = Object.keys(buttonsInfo) as Array<keyof typeof buttonsInfo>

  const onClick = (name: keyof typeof buttonsInfo) => {
    setCounter(counter => counter + buttonsInfo[name]);
  };

  const parseToButtonName = (name: string) => {
    return name[0].toUpperCase() + name.substring(1);
  };

  return (
    <div className="MyCounter">
      <h2 className="MyCounter-value">
        카운터: {counter}
      </h2>

      <div className="MyCounter-actions">
        {buttonNames.map(name => (
          <button
            key={name}
            className="MyCounter-actions-button"
            onClick={() => onClick(name)}
          >
            {parseToButtonName(name)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyCounter;