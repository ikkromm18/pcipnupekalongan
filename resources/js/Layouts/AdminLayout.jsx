import MySideBar from "../Components/MySideBar";

export default function AdminLayout({ children }) {
    console.log("Admin");

    return (
        <>
            <div className="flex min-h-screen">
                <MySideBar />
                <main className="flex-1 bg-gray-100">
                    <div className="p-4">{children}</div>
                </main>
            </div>
        </>
    );
}
