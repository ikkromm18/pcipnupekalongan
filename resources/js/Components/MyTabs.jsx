"use client";

import { TabItem, Tabs } from "flowbite-react";

export default function MyTabs() {
    return (
        <Tabs aria-label="Tabs with underline" variant="underline">
            <TabItem active title="Pengajuan Pengesahan">
                <p>Pengajuan SP</p>
            </TabItem>

            <TabItem active title="Pengirimam Surat">
                <p>Pengiriman Surat</p>
            </TabItem>
        </Tabs>
    );
}
