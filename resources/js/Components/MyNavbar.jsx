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
                    <NavbarLink href="/">Beranda</NavbarLink>
                    <NavbarLink href="#">Berita</NavbarLink>
                    <NavbarLink href="#">Profil</NavbarLink>
                    <NavbarLink href="#">Kontak</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}
