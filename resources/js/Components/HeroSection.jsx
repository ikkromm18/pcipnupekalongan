import { Link } from "@inertiajs/react";

export default function HeroSection() {
    return (
        <>
            <section className="px-20 mb-8 bg-[url('./images/Ornamen.png')]">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col">
                        <div className="flex flex-col font-extrabold text-6xl text-gray-800">
                            <h1 className="mb-4">Selamat Datang Rekan's</h1>
                            <h1 className="mb-4">di Website IPNU</h1>
                            <h1 className="mb-5">Kota Santri</h1>
                        </div>
                        <p className="text-2xl mb-5 text-gray-700">
                            IPNU Kota Santri : Ananta Digdaya Guna
                        </p>
                        <div className="flex gap-4">
                            <Link className="bg-[#03CC9D] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#4da590]">
                                Baca Berita
                            </Link>
                            <div className="">
                                <img src="./images/media.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src="./images/Cukup.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}
