
import Link from "next/link";
import Image from 'next/image';
import CodeExample from "../public/images/Code.png"
import HeaderComponent from "./_components/header";
import FooterComponent from "./_components/footer";

export default function Home(){


    return(
        <main>
            <HeaderComponent />
            <div className="bg-gray-600 font-serif text-white p-5">
                <h2 className="text-2xl pb-2 font-serif underline underline-offset-4">Create Your Video Game Wishlist</h2>
                <p>
                    Welcome to your ultimate videogame Wishlist platform! 
                    Our website empowers you to effortlessly create and 
                    manage your dream gaming list. Search for your favorite 
                    games using our intuitive API-powered system, explore 
                    detailed game information, and add them to your personalized 
                    wishlist. Stay organized and never miss out on the titles 
                    you’ve been eyeing. Get started today and build the gaming 
                    collection of your dreams!
                </p>
                <div className="m-5 flex flex-col items-center bg-slate-700 p-5 rounded-md w-1/4 mx-auto">
                    <h3 className="text-center text-xl text-white">Authentication through GitHub</h3>
                    <Link
                        className="bg-blue-600 text-white rounded px-4 py-2 mt-4 text-center"
                        href="./wishListApplication/"
                    >
                        Sign In Page
                    </Link>
                </div>
                <div>
                    <h2
                        className="text-center text-2xl pt-4 pb-2 text-white underline underline-offset-4"
                    >
                        Made using Next.js, Auth through FireBase and Deployed to vercel
                    </h2>

                    <Image
                        src={CodeExample}
                        alt="Code example made using carbon.now.sh"
                        className="rounded-md w-2/4 mx-auto">
                    </Image>
                </div>
            </div>

            <FooterComponent/>
        </main>
    );
} 