
import Image from 'next/image';
import GitHubLogo from '../../../public/images/GitHub-Logo-Blue.jpg'

export default function Footer(){


    return(
        <section className="bg-black text-white font-serif flex justify-around p-4">
            
            <div>
                <div className="flex justify-between items-center">
                    <p>License</p>      {/* replace with link to license */}
                    <p>Copyright</p>	{/* replace with copyright? */}
                </div>

                <p>All rights Reserved</p>
            </div>


            <div className="flex items-center">
                <p>www.video-game-wish-list.com</p>
            </div>

            <div>
                <div className="flex justify-center items-center">
                    <Image
                        src={GitHubLogo}
                        alt="GitHub Logo from ******"
                        width={50}
                        height="auto"
                        className="rounded-md">
                    </Image >
                </div>

                <p>Github</p>
            </div>

        </section>
    );
}