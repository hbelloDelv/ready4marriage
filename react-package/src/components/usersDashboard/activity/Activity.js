import React from 'react';
import { Link } from 'react-router-dom';

function Activity() {
    return (
        <div className="activityWrapper">
            <div><p>Activity</p></div>
            <div className="activity-links">
                <ul>
                    <li><Link>Viewed me</Link></li>
                    <li><Link>Matches</Link></li>
                    <li><Link>Favorites</Link></li>
                    <li><Link>Favorited me</Link></li>
                    <li><Link>You like</Link></li>
                    <li><Link>Liked you</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Activity
