import CardArticle from "./CardArticle";

export default function ArticleSection() {
    const articles = [
        {
            id: 1,
            title: "Noteworthy technology acquisitions 2021",
            description:
                " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        },
        { id: 2, title: "Judul Artikel 2", description: "Deskripsi artikel 2" },
        { id: 3, title: "Judul Artikel 3", description: "Deskripsi artikel 3" },
        { id: 3, title: "Judul Artikel 4", description: "Deskripsi artikel 4" },
    ];
    return (
        <>
            <section className="px-20 py-16">
                <h1 className="font-bold text-3xl mb-6">BERITA DAN ARTIKEL</h1>
                <div className="flex flex-wrap gap-8 justify-evenly">
                    {articles.map((article) => (
                        <CardArticle
                            key={article.id}
                            title={article.title}
                            decsription={article.description}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
