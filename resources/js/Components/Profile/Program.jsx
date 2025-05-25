import CardProgram from "../CardProgram";
import { Link } from "@inertiajs/react";

export default function Program() {
    return (
        <>
            <section className="px-8 py-16 md:px-20">
                <h1 className="mb-4 text-3xl font-bold" data-aos="fade-up">
                    Program Kerja IPNU KOTA SANTRI
                </h1>
                <div className="flex flex-col gap-4" data-aos="fade-up">
                    <CardProgram />
                    <CardProgram />

                    <CardProgram />

                    <CardProgram />
                </div>
                <div className="flex justify-center mt-8" data-aos="fade-up">
                    <Link className="bg-[#03CC9D] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#4da590] mx-auto">
                        Program Kerja Lainnya
                    </Link>
                </div>
            </section>
        </>
    );
}
