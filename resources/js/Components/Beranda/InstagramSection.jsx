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
            <section className="px-20 py-16">
                <h1 className="font-bold text-3xl mb-6">INSTAGRAM POST</h1>
                <div className="flex flex-wrap justify-evenly">
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
