import CardInstagram from "../CardInstagram";

export default function InstagramSection() {
    const InstagramPosts = [
        {
            id: 1,
            caption: "Noteworthy technology acquisitions 2021",
        },
        { id: 2, caption: "Judul Artikel 2" },
        { id: 3, caption: "Judul Artikel 3" },
        { id: 4, caption: "Judul Artikel 4" },
    ];
    return (
        <>
            <section className="px-8 py-16 md:px-20">
                <h1 className="mb-6 text-3xl font-bold text-center md:text-left">
                    INSTAGRAM POST
                </h1>
                <div className="flex flex-wrap gap-4 justify-evenly">
                    {InstagramPosts.map((igpost) => (
                        <CardInstagram
                            key={igpost.id}
                            caption={igpost.caption}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
