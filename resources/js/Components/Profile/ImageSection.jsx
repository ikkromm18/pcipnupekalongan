import MyCarousel from "../MyCarousel";

export default function ImageSection({ images }) {
    const heightOfImage = "h-[600px]";
    return (
        <>
            <MyCarousel images={images} height={heightOfImage} />
        </>
    );
}
