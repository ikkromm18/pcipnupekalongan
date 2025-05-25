import {
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
} from "flowbite-react";

import { HiCalendar } from "react-icons/hi";

export default function MyTimeline({ items }) {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineContent>
                    {items.map((item, index) => (
                        <TimelineBody key={index}>
                            <TimelinePoint icon={HiCalendar} />
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                {item.label}
                            </a>
                        </TimelineBody>
                    ))}
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
