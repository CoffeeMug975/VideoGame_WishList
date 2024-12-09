

import Image from 'next/image';
import Logo from '../../../public/images/Wishlist-WebSite-Logo.png';
import CheckMark from '../../../public/images/CheckMark.png';

export default function Header(){
    
    // UserInfo() function
    // - If signed out return blank box
    // - If signed in return box with (email, name, icon) With sign out button
    


    return(
        <section className="flex justify-around bg-black p-3  pt-4 border-b-4 mb-0  border-green-500">
            
            {/* Header-Left-Section = TV screen image */}
            <Image
                src={Logo}
                alt="VideoGame WishList Logo made using Canva.com"
                width={175}
                height="auto"
                className="rounded-md">
            </Image >

            {/* Header-Center-Section = Website Title */}
            <section className="flex items-center">
                <h1 className="text-3xl font-serif text-white pr-2">
                    VideoGame
                </h1>
                <Image
                    src={CheckMark}
                    alt="Check Mark Image found on CleanPNG"
                    // https://www.cleanpng.com/png-check-mark-royalty-free-stock-photography-clip-art-803672/download-png.html
                    width={50}
                    height="auto"
                    className="rounded-md pr-2">
                </Image >

                <h1 className="text-3xl font-bold bg-white p-2 rounded-lg text-black">
                    WishList
                </h1>
            </section>

            {/* Header-Right-Section =  Account details + sign out / Sign in */}
            {/* might leave blank */}
            <section className="">
                {/* Placeholder below */}
                {/* <UserInfo /> */}
            </section>
        </section>
    );
}