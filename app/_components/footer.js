
import Image from 'next/image';
import GitHubLogo from '../../public/images/GitHub-Logo-Blue.jpg';

export default function Footer(){


    return(
        <section className="bg-black text-white font-serif flex justify-around p-10">
            
            <div>
                <div className="flex justify-between items-center">
                    <p>License</p>      {/* replace with link to license */}
                    <p>Copyright</p>	{/* replace with copyright? */}
                </div>

                <p>All rights Reserved</p>
            </div>


            <div className="flex items-center">
                <p>https://videogame-wishlist.vercel.app</p>
            </div>

            <div>
                <div className="flex justify-center items-center">
                <a href="https://github.com/CoffeeMug975/VideoGame_WishList" target="_blank" rel="noopener noreferrer">
                    <Image
                    src={GitHubLogo}
                    alt="GitHub Logo from ******"
                    width={50}
                    height="auto"
                    className="rounded-md"
                />
                </a>
                </div>

                <p>Github</p>
            </div>

        </section>
    );
}