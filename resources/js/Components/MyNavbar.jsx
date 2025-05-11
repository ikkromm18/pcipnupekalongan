import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";

export default function MyNavbar() {
    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Ipnu
                    </span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <Button color="green">Get started</Button>
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
