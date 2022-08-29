import { useEffect, useState } from "react"
import app from "../../firebase_init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                setUser(user)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return { user, singInWithGoogle, handleSignOut }
}

export default useFirebase