import { Link } from "@inertiajs/react";
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    createTheme,
    ThemeProvider,
} from "flowbite-react";

const myPrimary = createTheme({
    button: {
        color: {
            primary: "bg-[#03CC9D] hover:bg-[#4da590] text-white",
        },
        size: {
            lg: "px-6 py-3 text-lg",
        },
    },
});

export default function MyNavbar() {
    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <img src="./images/pcipnulogo.png" alt="" />
                </NavbarBrand>
                <div className="flex md:order-2">
                    <ThemeProvider theme={myPrimary}>
                        <Button color="primary">Login</Button>
                    </ThemeProvider>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    {/* <NavbarLink href="/">Beranda</NavbarLink>
                    <NavbarLink href={"/news"}>Berita</NavbarLink>
                    <NavbarLink href="#">Profil</NavbarLink>
                    <NavbarLink href="#">Kontak</NavbarLink> */}
                    <Link href={"/"} className="hover:text-[#03CC9D]">
                        Beranda
                    </Link>
                    <Link href={`/news`} className="hover:text-[#03CC9D]">
                        Berita
                    </Link>
                    <Link href={`/profile`} className="hover:text-[#03CC9D]">
                        Profil
                    </Link>
                    <Link className="hover:text-[#03CC9D]">Kontak</Link>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}
