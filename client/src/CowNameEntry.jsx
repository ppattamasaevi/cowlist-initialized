import React from "react";

const CowNameEntry = ({cow, handleCowEntryClick}) => (
  <div>
    <span onClick={() => {handleCowEntryClick(cow)}}>
      {cow.name}
    </span>
  </div>
)

export default CowNameEntry;