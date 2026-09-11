import handleLogOut from "../hooks/LogOut";

export default function ChatRoom() {
    return (
        <div>
            <h1>It`s chat room</h1>
            <button className="border-2 border-black rounded-full py-2 px-3 cursor-pointer" onClick={handleLogOut}>
                Log Out
            </button>
        </div>
    );
}