export default function ContactUs() {
    return (
        <>
            <section className="px-20 pt-24 pb-4">
                <h1 className="text-3xl font-bold">Hubungi Kami</h1>
            </section>

            <section className="px-20 py-8 bg-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0">
                    <div className="flex flex-col border-l-4 pl-5 border-[#03CC9D]">
                        <h2 className="text-gray-500">Kontak</h2>
                        <p className="font-medium">
                            082134885973 (Cukup Abdul Syukur)
                        </p>
                        <p className="font-medium">
                            082134885973 (Muhammad Khamdan)
                        </p>
                    </div>
                    <div className="flex flex-col border-l-4 pl-5 border-[#03CC9D]">
                        <h2 className="text-gray-500">Email</h2>
                        <p className="font-medium">ipnukotasantri@gmail.com</p>
                    </div>

                    <div className="flex flex-col border-l-4 pl-5 border-[#03CC9D]">
                        <h2 className="text-gray-500">Sekretariat</h2>
                        <p className="font-medium">
                            Jalan Karangdowo, Kedungwuni
                        </p>
                        <p className="font-medium">
                            Gedung PCNU Kabupaten Pekalongan
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
