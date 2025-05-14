import MyFooter from "../Components/MyFooter";
import MyNavbar from "../Components/MyNavbar";

export default function MainLayout({ children }) {
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
