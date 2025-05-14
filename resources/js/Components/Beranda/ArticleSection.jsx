import { Link } from "@inertiajs/react";
import CardArticle from "../CardArticle";

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
        { id: 4, title: "Judul Artikel 4", description: "Deskripsi artikel 4" },
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

                <div className="text-center mt-10">
                    <Link className="bg-[#03CC9D] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#4da590]">
                        Berita dan Artikel Lainnya
                    </Link>
                </div>
            </section>
        </>
    );
}
