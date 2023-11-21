import React from "react";

const MapLoop1 = () => {

  const userNames = ["Mustafa", "Ahmet", "Mehmet", "Hasan", "Hüseyin"];

  return (
    <div>
      {
        //true  && <h1>Hello World - {userNames[0]} </h1>

        userNames.map((userName, i) => {

          return (
            <>
              <h1> Hello, {userName} - {i + 1} </h1>
            </>
          );
        })
      }
    </div>
  );
};

export default MapLoop1;
