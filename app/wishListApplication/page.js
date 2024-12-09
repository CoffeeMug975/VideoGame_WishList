"use client";

import Link from "next/link";
import Header from "./menu/header";
import Footer from "./menu/footer";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
            console.log("Signed in successfully");
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
            console.log("Signed out successfully");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <main>
            <Header />
            <section className="bg-gray-600 text-white">
                <div className="p-5">
                    <h2 className="text-2xl font-serif pb-5 underline underline-offset-4">
                        Create Personalized Video Game Wishlist
                    </h2>
                    {user ? (
                        <div>
                            <p>Comment: User signed in</p>
                            <h3>Welcome, {user.displayName || "User"}!</h3>
                            <p>Additional user info goes here</p>
                            <Link href="wishListApplication/wishListUserPage">
                                Go to User Page
                            </Link>
                            <p>Spacer</p>
                            <button type="button" onClick={handleSignOut}>
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <div>
                            <p>Comment: No user signed in</p>
                            <h3>Please sign in</h3>
                            <button type="button" onClick={handleSignIn}>
                                Sign In with GitHub
                            </button>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </main>
    );
}
