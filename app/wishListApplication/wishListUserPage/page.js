"use client"


import Link from 'next/link';
import Header from '../menu/header';
import Footer from '../menu/footer';


export default function UserWishList(){

    return(
        <main>
            {/* Header section */}
            <Header />
    
            <div className="bg-gray-600 text-white">
                <p>Comment: User signed in and on wishlist page</p>
                <h2>This is the user wishlist page</h2>
                <Link href="../../wishListApplication" >Home Page</Link>   {/* Delete: testing */}
    
            </div>
    
          {/* Footer section */}
            <Footer />
        </main>
    );
}