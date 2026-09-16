type ChatCardProps = {
    username: string;
    lastMessageText: string;
    lastMessageStatus: 'sent' | 'read' | 'unread';
    lastMessageTime: string;
    unreadMessages: number;
    isUserLastMessageSender: boolean;
}

const ChatCard = ({username, lastMessageText, lastMessageStatus, lastMessageTime, unreadMessages, isUserLastMessageSender}: ChatCardProps) => {
    const formattedMessageTime = new Date(lastMessageTime).toLocaleTimeString();

    return (
        <div className="grid grid-cols-3 w-full h-25">
            <div>
                <div className="w-15 h-15 bg-black rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2">
                <h3>{username}</h3>
                <p>{lastMessageText}</p>
            </div>
            <div className="flex flex-col gap-2">
                <p>{formattedMessageTime}</p>
                {isUserLastMessageSender ? <p>{lastMessageStatus}</p> : <p>{unreadMessages}</p>}
            </div>
        </div>
    )
}

export default ChatCard;