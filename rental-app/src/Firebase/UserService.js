import { auth } from './Init'
import { useEffect, useState } from "react";

import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword

} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const loginWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;
        console.log({ user });
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
}

export const loginWithGithub = async () => {
    try {
        const response = await signInWithPopup(auth, githubProvider);
        const user = response.user;
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
}

export const loginInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            setUser(u);
        });

        return () => unsubscribe();
    }, []);

    return user;
}

export const logout = () => {
    signOut(auth);
}