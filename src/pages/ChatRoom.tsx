import handleLogOut from "../hooks/LogOut";
import ChatCard from "../components/ChatCard";

export default function ChatRoom() {
    return (
        <div className="w-screen h-screen grid grid-cols-[1fr_3fr]">
            {/* Chat list */}
            <div className="h-full bg-[#e6e6e6]">
                <div className="border-b-2 border-[#9e9e9e]">
                    <div className="flex flex-row gap-5 items-center m-3">
                        <div className="w-15 h-15 rounded-full bg-black"></div>
                        <p className="text-2xl">Surname Name</p>
                    </div>
                </div>
                <div>
                    <ChatCard username="Username Name" lastMessageText="It is last message in this chat." lastMessageStatus="sent" lastMessageTime='2026-09-16T11:00:00.000Z' unreadMessages={2} isUserLastMessageSender={false} />
                </div>
                <button className="border-2 border-black rounded-full py-2 px-3 cursor-pointer" onClick={handleLogOut}>
                    Log Out
                </button>
            </div>
            {/* Chat window */}
            <div>

            </div>
        </div>
    );
}