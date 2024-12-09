"use client"

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import HeaderComponent from '../../_components/header';
import FooterComponent from '../../_components/footer';

export default function ProtectedPageComponent(){
    
    const {user} = useUserAuth();

    return(
        <main>
            <HeaderComponent />

            <div className="bg-gray-600 text-white">
                { user ? (
                    <div className="flex flex-col items-center justify-center p-5 space-y-5">
                        <section className="w-4/5 flex flex-col items-center justify-center p-5 bg-slate-700 rounded-md text-center">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h2 className="text-2xl pb-2 font-serif">{user.displayName}&#39;'s Wishlist</h2>
                            <Link href="../wishListApplication/" className="text-blue-500 mt-4 hover:underline">
                                Back to User Page
                            </Link>
                        </section>

                        {/* Empty Div */}
                        <div className="w-4/5 h-10 bg-transparent"></div>

                        {/* Bottom Sections */}
                        <div className="w-4/5 flex justify-between space-x-5">
                            <section className="w-1/2 p-5 bg-slate-700 rounded-md">
                                <h3 className="text-xl text-center">User Information</h3>
                                <img src={user.photoURL} className="w-20 h-20" />
                                <p>{user.displayName}</p>
                                <p>{user.email}</p>

                                <h3 className="text-xl pt-4 pb-4">Wish List</h3>
                                <p>Click the X to remove an item</p>

                            </section>

                            <section className="w-1/2 p-5 bg-slate-700 rounded-md text-center">
                                <h3 className="text-xl">Under Div Section 2</h3>
                                <p>Content for the second section.</p>
                            </section>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>You must be logged in to view this page.</p>
                        <Link href="../">Click here to return to the sign in page.</Link>
                    </div>
                ) }
            </div>

            <FooterComponent />
        </main>
    );
}