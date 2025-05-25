import MyFooter from "../Components/MyFooter";
import MyNavbar from "../Components/MyNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MainLayout({ children }) {
    useEffect(() => {
        AOS.init({ duration: 1200 }); // durasi animasi dalam ms
    }, []);
    return (
        <>
            <div className="px-16">
                <MyNavbar />
            </div>
            <main>{children}</main>
            <MyFooter />
        </>
    );
}
