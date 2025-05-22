import CardMisi from "../CardMisi";

export default function Misi() {
    return (
        <>
            <section className="px-8 md:px-20">
                <h1 className="mb-8 text-3xl font-bold text-center">
                    MISI IPNU
                </h1>

                <div className="flex flex-wrap gap-10 justify-evenly">
                    <CardMisi />
                    <CardMisi />
                    <CardMisi />
                    <CardMisi />
                </div>
            </section>
        </>
    );
}
