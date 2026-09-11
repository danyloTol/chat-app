import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const handleLogOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        return(error);
    }
}

export default handleLogOut;