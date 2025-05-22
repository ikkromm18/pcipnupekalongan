import History from "../Components/Profile/History";
import ImageSection from "../Components/Profile/ImageSection";
import Misi from "../Components/Profile/Misi";
import Program from "../Components/Profile/Program";
import Visi from "../Components/Profile/Visi";

export default function Profile() {
    const images = [
        "https://picsum.photos/id/1018/600/350",
        "https://picsum.photos/id/1015/600/350",
        "https://picsum.photos/id/1016/600/350",
    ];

    return (
        <>
            <section className="px-0 pb-10 md:pt-10 md:px-20">
                <ImageSection images={images} />
            </section>
            <History />

            <Visi />

            <Misi />

            <Program />
        </>
    );
}
