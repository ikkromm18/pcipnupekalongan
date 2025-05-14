import { Card } from "flowbite-react";
import { MyAvatar } from "./MyAvatar";
import { MyBadge } from "./MyBadge";

export default function CardArticle({ title, decsription }) {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://picsum.photos/id/1016/600/350"
        >
            <div className=""></div>
            <p className="font-light text-xs text-[#8F8F8F]">1 Hours Ago</p>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {decsription}
            </p>
            <div className="flex items-center gap-4">
                <MyAvatar />
                <p className="text-xs">Mahrus Sanjoku</p>
            </div>
            <MyBadge />
        </Card>
    );
}
