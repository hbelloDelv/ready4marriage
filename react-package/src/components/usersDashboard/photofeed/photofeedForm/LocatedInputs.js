import React from 'react'

function LocatedInputs() {
    return (
        <div className="photoFeedForm">
                <div className="formItem-label">
                    Located
                </div>
                <div className="locatedAt-content">
                    <div className="form-group" >
                     <input type="text"  className="form-control" placeholder="Country"/>    
                  </div>
                  <div className="form-group">
                     <input type="text"  className="form-control" placeholder="State"/>
                  </div>
                  <div className="form-group">
                     <input type="text"  className="form-control" placeholder="Religion"/>
                  </div>
                </div>
        </div>
    )
}

export default LocatedInputs
