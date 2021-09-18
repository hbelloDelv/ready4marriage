import React from 'react'
import { Link } from 'react-router-dom';
// import { IconName } from "react-icons/io5";
import { IoPeopleOutline, FcBusinessman, FcBusinesswoman } from "react-icons/fc";

function IamLookingForSection() {
    return (
        <div className="photoFeedForm">
            <div className="formItem-label">
                I am Looking for
            </div>
            <div className="iamLookingFor-content">
                <div className="image1"><Link>< FcBusinessman className="lookForMan"/></Link></div>
                <div className="image1"><Link>< FcBusinessman className="lookForMan"/></Link></div>
                <div className="image1"><Link><FcBusinesswoman className="lookForWoman"/></Link></div>
            </div>
        </div>
    )
}

export default IamLookingForSection
