import History from "../Components/Profile/History";
import ImageSection from "../Components/Profile/ImageSection";
import Misi from "../Components/Profile/Misi";
import Visi from "../Components/Profile/Visi";

export default function Profile() {
    const images = [
        "https://picsum.photos/id/1018/600/350",
        "https://picsum.photos/id/1015/600/350",
        "https://picsum.photos/id/1016/600/350",
    ];

    return (
        <>
            <section className="px-20 py-10">
                <ImageSection images={images} />
            </section>
            <History />

            <Visi />

            <Misi />
            <></>
        </>
    );
}
