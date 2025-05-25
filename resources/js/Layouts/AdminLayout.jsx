import { useState } from "react";
import MySideBar from "../Components/MySideBar";
import MyAvatarAdmin from "../Components/MyAvatarAdmin";
import { HiMenu } from "react-icons/hi";
import { Button } from "flowbite-react";

export default function AdminLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <MySideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            {/* Konten utama */}
            <div className="flex-1 flex flex-col bg-gray-100">
                {/* Navbar di dalam konten utama */}
                <div className="sticky top-0 z-30 bg-white shadow px-4 py-2 flex justify-between items-center md:pl-0 pl-2">
                    {/* Tombol hanya muncul di mobile */}
                    <div className="md:hidden">
                        <Button
                            color="light"
                            size="sm"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <HiMenu size={24} />
                        </Button>
                    </div>

                    <div className="ml-auto">
                        <MyAvatarAdmin />
                    </div>
                </div>

                {/* Konten dinamis */}
                <main className="p-4 flex-1">{children}</main>
            </div>
        </div>
    );
}
