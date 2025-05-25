// MySideBar.jsx
"use client";

import {
    Sidebar,
    SidebarLogo,
    SidebarCollapse,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
} from "flowbite-react";
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUser,
} from "react-icons/hi";

export default function MySideBar({ isOpen, setIsOpen }) {
    return (
        <div
            className={`fixed z-40 md:static ${
                isOpen ? "block" : "hidden"
            } md:block`}
        >
            <Sidebar aria-label="Sidebar" className="w-64">
                <SidebarLogo
                    href="#"
                    img="./images/pcipnulogo.png"
                    imgAlt="Flowbite logo"
                ></SidebarLogo>
                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarItem
                            href="#"
                            icon={HiChartPie}
                            onClick={() => setIsOpen(false)}
                        >
                            Dashboard
                        </SidebarItem>
                        <SidebarCollapse
                            icon={HiShoppingBag}
                            label="E-commerce"
                        >
                            <SidebarItem
                                href="#"
                                onClick={() => setIsOpen(false)}
                            >
                                Products
                            </SidebarItem>
                            <SidebarItem
                                href="#"
                                onClick={() => setIsOpen(false)}
                            >
                                Sales
                            </SidebarItem>
                            <SidebarItem
                                href="#"
                                onClick={() => setIsOpen(false)}
                            >
                                Refunds
                            </SidebarItem>
                            <SidebarItem
                                href="#"
                                onClick={() => setIsOpen(false)}
                            >
                                Shipping
                            </SidebarItem>
                        </SidebarCollapse>
                        <SidebarItem
                            href="#"
                            icon={HiInbox}
                            onClick={() => setIsOpen(false)}
                        >
                            Inbox
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                            icon={HiUser}
                            onClick={() => setIsOpen(false)}
                        >
                            Users
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                            icon={HiShoppingBag}
                            onClick={() => setIsOpen(false)}
                        >
                            Products
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                            icon={HiArrowSmRight}
                            onClick={() => setIsOpen(false)}
                        >
                            Sign In
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                            icon={HiTable}
                            onClick={() => setIsOpen(false)}
                        >
                            Sign Up
                        </SidebarItem>
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>
        </div>
    );
}
