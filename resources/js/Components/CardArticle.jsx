import { Card } from "flowbite-react";

export default function CardArticle({ title, decsription }) {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://picsum.photos/id/1016/600/350"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {decsription}
            </p>
        </Card>
    );
}
