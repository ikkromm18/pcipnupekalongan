import CardMisi from "../CardMisi";

export default function Misi() {
    return (
        <>
            <section className="px-20">
                <h1 className="text-center font-bold text-3xl mb-8">
                    MISI IPNU
                </h1>

                <div className="flex flex-wrap justify-evenly gap-10">
                    <CardMisi />
                    <CardMisi />
                    <CardMisi />
                    <CardMisi />
                </div>
            </section>
        </>
    );
}
