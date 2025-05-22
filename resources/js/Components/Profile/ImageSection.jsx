import MyCarousel from "../MyCarousel";

export default function ImageSection({ images }) {
    const heightOfImage = "h-[600px]";
    return (
        <>
            <div className="pt-16">
                <MyCarousel images={images} height={heightOfImage} />
            </div>
        </>
    );
}
