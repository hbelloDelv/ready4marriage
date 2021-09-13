import React from 'react'

function ConversationBannned() {
    return (
        <div className="conversationBanned">
            <div className="conversationBannedContent">
                <div className="userNotfound">
                    <h4>User not Found</h4>
                    Profile deleted or banned
                </div>
                <div className="deletedConversation">
                    <button className="btn btn-danger">Deleted</button>
                </div>
            </div>
        </div>
    )
}

export default ConversationBannned
