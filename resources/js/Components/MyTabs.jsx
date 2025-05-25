// components/MyTabs.jsx
"use client";

import { TabItem, Tabs } from "flowbite-react";
import MyTimeline from "./MyTimeline";

const timelineData = {
    adm: [
        {
            label: "Pengajuan SP",
            url: "https://drive.google.com/drive/folders/1cfC3DCJkMqXhlYiCNNCv33dBt4QA8Nev?usp=drive_link",
        },
        {
            label: "Pengajuan Pengiriman Surat",
            url: "https://drive.google.com/drive/folders/1cfC3DCJkMqXhlYiCNNCv33dBt4QA8Nev?usp=drive_link",
        },
    ],
    organisasi: [
        {
            label: "Supervisi",
            url: "https://drive.google.com/drive/folders/1cfC3DCJkMqXhlYiCNNCv33dBt4QA8Nev?usp=drive_link",
        },
    ],
    kaderisasi: [
        {
            label: "Pengajuan KTA",
            url: "https://drive.google.com/drive/folders/1cfC3DCJkMqXhlYiCNNCv33dBt4QA8Nev?usp=drive_link",
        },
    ],
    jsp: [
        {
            label: "Pengajuan Pembentukan PK",
            url: "https://drive.google.com/drive/folders/1cfC3DCJkMqXhlYiCNNCv33dBt4QA8Nev?usp=drive_link",
        },
    ],
};

export default function MyTabs() {
    return (
        <Tabs aria-label="Tabs with underline" variant="underline">
            <TabItem active title="Administrasi">
                <MyTimeline items={timelineData.adm} />
            </TabItem>

            <TabItem title="Organisasi">
                <MyTimeline items={timelineData.organisasi} />
            </TabItem>

            <TabItem title="Kaderisasi">
                <MyTimeline items={timelineData.kaderisasi} />
            </TabItem>

            <TabItem title="Jaringan Sekolah dan Pesantren">
                <MyTimeline items={timelineData.jsp} />
            </TabItem>
        </Tabs>
    );
}
