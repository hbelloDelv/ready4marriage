import React from 'react';
import IamLookingForSection from './IamLookingForSection';
import AgeInputs from './AgeInputs';
import LocatedInputs from './LocatedInputs';
import SearchField from './SearchField';


function Form() {
    return (
        <div className="photofeedFormWrapper">
                <IamLookingForSection />
                <AgeInputs />
                <LocatedInputs />
                <SearchField />
        </div>
    )
}

export default Form
