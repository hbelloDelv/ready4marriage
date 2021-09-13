import React from 'react';
import MessagesContent from './MessagesContent';
import ConversationBannned from './ConversationBannned';

function Wrapper() {
    return (
        <div className="messagesWrapper">
            <MessagesContent />
            <ConversationBannned />
        </div>
    )
}

export default Wrapper
