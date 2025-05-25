import CardMisi from "../CardMisi";
import {
    FaHandsPraying,
    FaBrain,
    FaLightbulb,
    FaPeopleGroup,
} from "react-icons/fa6";

export default function Misi() {
    return (
        <>
            <section className="px-8 md:px-20">
                <h1
                    className="mb-8 text-3xl font-bold text-center"
                    data-aos="fade-up"
                >
                    MISI IPNU
                </h1>

                <div
                    className="flex flex-wrap gap-10 justify-evenly"
                    data-aos="fade-up"
                >
                    <CardMisi
                        icon={<FaHandsPraying size={36} />}
                        misi={
                            "Mendorong para pelajar bangsa untuk taat (patuh) dalam menjalankan perintah dan menjauhi segala larangan yang termaktub dalam ajaran Islam"
                        }
                    />
                    <CardMisi
                        icon={<FaBrain size={36} />}
                        misi={
                            "Membentuk karakter para pelajar bangsa yang santun dalam bertindak, jujur dalam berprilaku, jernih dan obyektif dalam berfikir, serta memiliki ide/gagasan yang inovatif."
                        }
                    />
                    <CardMisi
                        icon={<FaLightbulb size={36} />}
                        misi={
                            "Mendorong pemanfaatan dan pengembangan ilmu pengetahuan dan teknologi sebagai media pengembangan potensi dan peningkatan SDM pelajar."
                        }
                    />
                    <CardMisi
                        icon={<FaPeopleGroup size={36} />}
                        misi={
                            "Mewujudkan kader pemimpin bangsa yang profesional, jujur dan bertanggung jawab yang dilandasi oleh spirit nilai ajaran Islam ahlussunah wal jamaah."
                        }
                    />
                </div>
            </section>
        </>
    );
}
