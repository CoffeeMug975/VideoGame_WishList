
import Link from "next/link";
import HeaderComponent from "./_components/header";
import FooterComponent from "./_components/footer";

export default function Home(){


    return(
        <main>
            <HeaderComponent />

            <h2>I am a title</h2>
            <Link href="./wishListApplication/" >Sign In</Link>

            <FooterComponent/>
        </main>
    );
} 