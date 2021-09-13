import React from 'react';
import RegFormHeader from './RegFormHeader';
import FormInputs from './Inputs';
import regForm from './regForm-style.css';

function RegistrationForm() {
    return (
        <div className="bg-regForm">
           <div className="regForm-style">
                <RegFormHeader />
                <FormInputs />
           </div>
        </div>
    )
}

export default RegistrationForm
