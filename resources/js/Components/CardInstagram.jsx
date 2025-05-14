import { Card } from "flowbite-react";

export default function CardInstagram({ caption }) {
    return (
        <>
            <Card
                className="max-w-2xs"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://picsum.photos/id/1015/600/350"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {caption}
                </h5>
            </Card>
        </>
    );
}
