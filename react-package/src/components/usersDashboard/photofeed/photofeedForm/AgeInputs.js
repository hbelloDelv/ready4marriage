import React from 'react'

function AgeInputs() {
    return (
        <div className="photoFeedForm">
                <div className="formItem-label">
                    Age
                </div>
                <div className="iamLookingFor-content">
                    <div className="form-group" >
                     <input type="text"  className="form-control" placeholder="From"/>    
                  </div>
                  <div className="form-group">
                     <input type="text"  className="form-control" placeholder="To"/>
                  </div>
                </div>
        </div>
    )
}

export default AgeInputs
