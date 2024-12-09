"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.dir(user);

    return (
        <main className="m-5">
            <header>
                <h1 className="text-3xl text-center">Firebase Auth</h1>
            </header>
            {user ? (
                <div>
                    <p>Welcome {user.displayName}!</p>
                    <p>{user.email}</p>
                    <img src={user.photoURL} className="w-10 h-10" />
                    <div>
                        <Link href="/wishListApplication/protected/">Protected Page</Link>
                    </div>
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                    >Sign Out</button>
                </div>
            ) : (
                <div>
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                    >Sign In</button>
                </div>
            )}
        </main>
    );

}