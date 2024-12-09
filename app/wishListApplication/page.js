"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import HeaderComponent from '../_components/header';
import FooterComponent from '../_components/footer';

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
        <main>
            <HeaderComponent />
            <section>
                {user ? (
                    <section className="bg-gray-600 font-serif text-white p-5 flex justify-center">
                        <div className="w-1/3 flex flex-col justify-center items-center text-center p-5 bg-slate-700 rounded-md">
                            <h2 className="text-2xl pb-2 font-serif">Signed in as {user.displayName}</h2>
                            <div className="flex">
                                <button
                                    type="button"
                                    onClick={handleSignOut}
                                    className="text-lg bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700 mr-2"
                                >
                                    Sign out
                                </button>
                                <Link
                                    className="text-lg bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700 inline-flex items-center justify-center ml-2"
                                    href="./wishListApplication/protected"
                                >
                                    Wishlist
                                </Link>
                            </div>
                        </div>
                    </section>
                    
                ) : (
                    <section className="bg-gray-600 font-serif text-white p-5 flex justify-center">
                        <div className="w-1/3 flex flex-col justify-center items-center text-center p-5 bg-slate-700 rounded-md">
                            <h2 className="text-2xl pb-2 font-serif">Sign in & Create Today</h2>
                            <div className="flex">
                                <button
                                    type="button"
                                    onClick={handleSignIn}
                                    className="text-lg bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700 mr-2"
                                >
                                    Sign In
                                </button>
                                <Link
                                    className="text-lg bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700 inline-flex items-center justify-center ml-2"
                                    href="../"
                                >
                                    Back to Homepage
                                </Link>
                            </div>
                        </div>
                    </section>
                )}
            </section>
            <FooterComponent />
        </main>
    );

}