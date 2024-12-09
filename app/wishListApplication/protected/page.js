"use client"

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import Header from '../../_components/header';
import Footer from '../../_components/footer';

export default function ProtectedPage(){
    
    const {user} = useUserAuth();

    return(
        <main className="m-5">
            <Header />
            <div className="bg-gray-600 text-white">
                { user ? (
                    <div>
                        <p>This is the user wishlist page</p>
                    </div>
                ) : (
                    <div>
                        <p>You must be logged in to view this page.</p>
                        <Link href="/wishListApplication/">Click here to return to the sign in page.</Link>
                    </div>
                ) }
            </div>
            <Footer />
        </main>
    );
}