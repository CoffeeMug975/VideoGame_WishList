"use client";

// import { useEffect } from "react";
import Link from "next/link";
import Header from "./menu/header";
import Footer from "./menu/footer";
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
      try{
          await firebaseSignOut();
      } catch (error) {
          console.log(error);
      }
  }

  console.dir(user);

  return(
      <div>
        <Header />
          <h1 className="text-2xl p-3">Week 9 FireBase Auth</h1>
          
          <h2 className="ml-3 text-lg rounded px-2 py-1 ">{user ? "Hi there!" : "Please sign in"}</h2>

          {user ?(
              <div>
                  <p>Welcome! {user.displayName}</p>
                  <p>{user.email}</p>
                  <img src={user.photoURL} className="w-100 h-100" />
                  <div
                      className="p-2 text-cyan-400 hover:text-cyan-700">
                      <Link href="wishListApplication/wishListUserPage">User Page</Link>
                  </div>
                  <button 
                      type="button" 
                      onClick={handleSignOut}
                      className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4 ml-5"
                      >Sign out
                  </button>
              </div>
          ) : (
              <div>
                  <button 
                      type="button" 
                      onClick={handleSignIn}
                      className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4 ml-5"
                      >Sign In
                  </button>
              </div>
          )}

      <Footer />
      </div>
  );
}

// export default function SignInPage() {
//   const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

//   useEffect(() => {
//     if (user) {
//       console.log("User is signed in:", user);
//     } else {
//       console.log("No user is signed in.");
//     }
//   }, [user]);

//   return (
//     <main>
//       <Header />
//       <section className="bg-gray-600 text-white p-5">
//         <h2 className="text-2xl font-serif pb-5 underline underline-offset-4">
//           Create Personalized Video Game Wishlist
//         </h2>
//         {user ? (
//           <div>
//             <h3>Welcome, {user.displayName || "User"}!</h3>
//             <p>Additional user info goes here</p>
//             <Link href="wishListApplication/wishListUserPage">
//               Go to User Page
//             </Link>
//             <button
//               type="button"
//               onClick={firebaseSignOut}
//               className="mt-3 bg-red-500 text-white py-2 px-4 rounded"
//             >
//               Sign Out
//             </button>
//           </div>
//         ) : (
//           <div>
//             <h3>Please sign in</h3>
//             <button
//               type="button"
//               onClick={gitHubSignIn}
//               className="mt-3 bg-green-500 text-white py-2 px-4 rounded"
//             >
//               Sign In with GitHub
//             </button>
//           </div>
//         )}
//       </section>
//       <Footer />
//     </main>
//   );
// }
