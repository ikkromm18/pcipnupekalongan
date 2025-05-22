import { Link } from "@inertiajs/react";
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
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
            <Navbar
                rounded
                className="fixed top-0 left-0 z-50 w-full px-8 bg-white shadow-sm md:px-20"
            >
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
                    <Link href={"/"} className="hover:text-[#03CC9D]">
                        Beranda
                    </Link>
                    <Link href={`/news`} className="hover:text-[#03CC9D]">
                        Berita
                    </Link>
                    <Link href={`/profile`} className="hover:text-[#03CC9D]">
                        Profil
                    </Link>
                    <Link href={`/contact`} className="hover:text-[#03CC9D]">
                        Kontak
                    </Link>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}
