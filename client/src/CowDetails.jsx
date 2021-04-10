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
        <p>
          {`${currentCow.name.toUpperCase()} :  ${currentCow.description}`}
        </p>
      </div>
    )
  }

}

export default CowDetails;