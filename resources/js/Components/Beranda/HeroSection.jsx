import { Link } from "@inertiajs/react";

export default function HeroSection() {
    return (
        <>
            <section className="px-8 md:px-20 pt-20 mb-8 bg-[url('./images/Ornamen.png')]">
                <div className="flex flex-col items-center justify-center md:flex-row">
                    <div className="flex flex-col" data-aos="fade-up">
                        <div className="flex flex-col text-4xl font-extrabold text-center text-gray-800 md:text-left md:text-6xl">
                            <h1 className="mb-0 md:mb-4">
                                Selamat Datang Rekan's
                            </h1>
                            <h1 className="mb-0 md:mb-4">di Website IPNU</h1>
                            <h1 className="mb-2 md:mb-5">Kota Santri</h1>
                        </div>
                        <p className="mb-5 text-2xl text-center text-gray-700 md:text-left">
                            IPNU Kota Santri : Ananta Digdaya Guna
                        </p>
                        <div className="flex gap-4 mb-4 md:mb-0">
                            <Link className="bg-[#03CC9D] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#4da590]">
                                Baca Berita
                            </Link>
                            <div className="">
                                <img src="./images/media.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="" data-aos="fade-up">
                        <img src="./images/Cukup.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}
