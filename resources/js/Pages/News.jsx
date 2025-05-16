import ArticleCategory from "../Components/ArticleCategory";
import CardArticle from "../Components/CardArticle";
import Search from "../Components/Search";

export default function News() {
    return (
        <>
            <section className="px-20 py-16">
                <h3 className="font-bold text-3xl text-center mb-2">
                    ARTIKEL DAN BERITA
                </h3>
                <Search />
                <ArticleCategory />
                <div className="flex flex-wrap justify-evenly gap-8">
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
