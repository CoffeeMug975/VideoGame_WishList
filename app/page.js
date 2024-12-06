
import Header from "./menu/header";
import Footer from "./menu/footer";


export default function SignInPage(){


  return(
    <main>
      {/* Header section */}
      <Header />

        <div className="bg-gray-600 text-white">
          <h2>Sign in and Create</h2>
          <h2>Wishlist</h2>

          <div>
            <h3>Authorize Sign Via</h3>
            <button>GitHub</button>
          </div>
        </div>

      {/* Footer section */}
      <Footer />
    </main>
  );
}