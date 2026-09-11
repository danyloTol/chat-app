import handleLogOut from "../hooks/LogOut";

export default function ChatRoom() {
    return (
        <div>
            <h1>It`s chat room</h1>
            <button onClick={handleLogOut}>
                Log Out
            </button>
        </div>
    );
}