import MyCarousel from "../MyCarousel";

export default function AboutSection() {
    const images = [
        "https://picsum.photos/id/1018/600/350",
        "https://picsum.photos/id/1015/600/350",
        "https://picsum.photos/id/1016/600/350",
    ];

    const heightOfImage = "h-96";
    return (
        <>
            <section className="px-8 py-16 md:px-20">
                <div className="flex flex-col">
                    <h3
                        className="text-3xl font-bold text-center"
                        data-aos="fade-up"
                    >
                        PC IPNU KABUPATEN PEKALONGAN
                    </h3>
                    <p
                        className="text-[16px] text-center pt-6"
                        data-aos="fade-up"
                    >
                        <span className="font-bold">
                            IPNU (Ikatan Pelajar Nahdlatul Ulama){" "}
                        </span>
                        adalah organisasi pelajar yang bernaung di bawah
                        Nahdlatul Ulama (NU). Organisasi ini bertujuan untuk
                        membina dan mengembangkan potensi pelajar, santri, serta
                        mahasiswa agar menjadi generasi yang berakhlakul
                        karimah, berilmu, dan berdaya saing sesuai dengan
                        nilai-nilai Ahlussunnah wal Jamaah An-Nahdliyah.
                    </p>
                    <div
                        className="flex flex-col gap-8 mt-16 md:flex-row justify-evenly md:gap-0"
                        data-aos="fade-up"
                    >
                        <div className="flex flex-col items-center">
                            <h4 className="text-[#03CC9D] font-bold text-6xl">
                                16
                            </h4>
                            <p className="text-[16px]">Pimpinan Anak Cabang</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h4 className="text-[#03CC9D] font-bold text-6xl">
                                207
                            </h4>
                            <p className="text-[16px]">Pimpinan Ranting</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h4 className="text-[#03CC9D] font-bold text-6xl">
                                20
                            </h4>
                            <p className="text-[16px]">Pimpinan Komisariat</p>
                        </div>
                    </div>
                    <div className="mt-16" data-aos="fade-up">
                        <MyCarousel images={images} height={heightOfImage} />
                    </div>
                </div>
            </section>
        </>
    );
}
