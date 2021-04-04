import React from "react";
import CowNameEntry from './CowNameEntry.jsx';

const CowNamesList = ({cows, handleCowEntryClick}) => (
  <div>
    <div>
      {cows.map((cow) =>
        <CowNameEntry
          cow={cow}
          handleCowEntryClick={handleCowEntryClick}
          key={cow.name}
        />
      )}
    </div>
  </div>
)

export default CowNamesList;