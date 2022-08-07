import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const RegisterAct = async ({ email, password }) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
}

export const LoginAct = async ({ email, password }) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
}

export const SignOutAct = async () => {
    const auth = getAuth();
    return signOut(auth);
}