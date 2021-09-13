import React from 'react';
import { Link } from 'react-router-dom';

function SectionOneButton() {
    return (
        <div className="sectionOneButton">
           <button type="submit" className="btn btn-success"><Link>Request access </Link></button>
        </div>
    )
}

export default SectionOneButton
