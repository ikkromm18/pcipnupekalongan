import ArticleCategory from "../Components/ArticleCategory";
import CardArticle from "../Components/CardArticle";
import Search from "../Components/Search";

export default function News() {
    return (
        <>
            <section className="px-8 pt-24 pb-16 md:px-20">
                <h3 className="mb-2 text-3xl font-bold text-center">
                    ARTIKEL DAN BERITA
                </h3>
                <Search />
                <ArticleCategory />
                <div
                    className="flex flex-wrap gap-8 justify-evenly"
                    data-aos="fade-up"
                >
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                </div>
            </section>
        </>
    );
}
