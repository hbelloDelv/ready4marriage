import React from 'react'

function UserdetailsHeader() {
    return (
        <div class="userdetailsHeader">
            <div className="userIdentity-one">
                <div className="userName">Austin Musa</div>
                <div className="userSpacing">.</div>
                <div className="userAge">35</div>
                <div className="heartImoji">HeartImoji</div>
            </div>

            <div className="userIdentity-two">
                <div className="userImage">Image</div>
                <div className="userCountry">Nigeria,</div>
                <div className="userLocation">Kaduna</div>
            </div>
            
            <div className="userIdentity-three">
                <div className="userButton"><button className="btn btn-primary">Messages</button></div>
                <div className="userGifts"><button className="btn btn-primary">Gifts</button></div>
                <div className="userForm">Form</div>
            </div>
        </div> 
        
    )
}

export default UserdetailsHeader
