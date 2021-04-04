import React from "react";

const CowDetails = ({currentCow}) => {

  if (currentCow === null) {
    return (
      <div>
        <h3>
          Click on a cow's name to see its description!
        </h3>
      </div>
    )
  } else {
    return (
      <div>
        <h3>
          {`${currentCow.name.toUpperCase()} :  ${currentCow.description}`}
        </h3>
      </div>
    )
  }

}

export default CowDetails;