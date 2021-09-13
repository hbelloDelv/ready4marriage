import React from 'react';
import PhotofeedHeader from './PhotofeedHeader';
import PhotofeedUsersWrapper from './PhotofeedUsersWrapper';
import Form from './photofeedForm/Form';



function Wrapper() {
    return (
        <div className="photofeedWrapper">
           <PhotofeedHeader />
            <PhotofeedUsersWrapper />
            <Form />
        </div>
    )
}

export default Wrapper
