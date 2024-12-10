"use client";

import Link from "next/link";
import Image from "next/image";
import { useUserAuth } from "./_utils/auth-context";
import HeaderComponent from "../_components/header";
import FooterComponent from "../_components/footer";
import WishlistExample from "../../public/images/Wishlists-image.png";
import APISearchExample from "../../public/images/Search-API-Image.png";

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
      <section className="bg-gray-600 font-serif text-white p-10 flex justify-between items-center">
        {user ? (
          <>
            {/* Sign-in Section */}
            <div className="flex flex-col justify-center items-center text-center p-5 bg-slate-700 rounded-md w-1/4">
              <h2 className="text-2xl pb-4">Signed in as {user.displayName}</h2>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="text-lg bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700"
                >
                  Sign out
                </button>
                <Link
                  href="./wishListApplication/protected"
                  className="text-lg bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700"
                >
                  Wishlist
                </Link>
              </div>
            </div>

            {/* Create Custom Wishlists */}
            <div className="text-center w-1/4">
              <h2 className="text-xl mb-4">Create Custom Wishlists</h2>
              <Image
                src={WishlistExample}
                alt="Wish list Example"
                className="rounded-md w-full"
              />
            </div>

            {/* Look for the Best Deals */}
            <div className="text-center w-1/4">
              <h2 className="text-xl mb-4">Look for the Best Deals</h2>
              <Image
                src={APISearchExample}
                alt="API Search Example"
                className="rounded-md w-full"
              />
            </div>
          </>
        ) : (
          <>
            {/* Sign-in Section */}
            <div className="flex flex-col justify-center items-center text-center p-5 bg-slate-700 rounded-md w-1/4">
              <h2 className="text-2xl pb-4">Sign in & Create Today</h2>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="text-lg bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700"
                >
                  Sign In
                </button>
                <Link
                  href="../"
                  className="text-lg bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>

            {/* Create Custom Wishlists */}
            <div className="text-center w-1/4">
              <h2 className="text-xl mb-4">Create Custom Wishlists</h2>
              <Image
                src={WishlistExample}
                alt="Wish list Example"
                className="rounded-md w-full"
              />
            </div>

            {/* Look for the Best Deals */}
            <div className="text-center w-1/4">
              <h2 className="text-xl mb-4">Look for the Best Deals</h2>
              <Image
                src={APISearchExample}
                alt="API Search Example"
                className="rounded-md w-full"
              />
            </div>
          </>
        )}
      </section>

      <FooterComponent />
    </main>
  );
}
