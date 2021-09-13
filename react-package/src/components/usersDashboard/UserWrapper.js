import React from 'react';
import UserDashboardHeader from './UserDashboardHeader';
import PhotoFeedWrapper from './photofeed/Wrapper';
import usersStyle from './users-style.css'

function UserWrapper() {
    return (
        <div>
            <UserDashboardHeader />
            <PhotoFeedWrapper />
        </div>
    )
}

export default UserWrapper
