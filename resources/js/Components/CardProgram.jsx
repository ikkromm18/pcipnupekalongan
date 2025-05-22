import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { Button, ThemeProvider, createTheme } from "flowbite-react";

const myPrimary = createTheme({
    button: {
        color: {
            primary: "bg-[#03CC9D] hover:bg-[#4da590] text-white",
        },
        size: {
            lg: "px-6 py-3 text-lg",
        },
    },
});

export default function CardProgram() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 p-6 border border-gray-300 rounded-lg md:flex-row">
                <div className="w-72">
                    <img
                        src="https://picsum.photos/id/1020/600/350"
                        alt=""
                        className="object-cover w-full aspect-square"
                    />
                </div>
                <div className="flex flex-col text-gray-800">
                    <h1 className="mb-4 text-3xl font-medium">
                        Latihan Instruktur I
                    </h1>
                    <p className="mb-4 text-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Placeat itaque inventore alias amet quia adipisci
                        at quod sequi perferendis saepe? Numquam iusto aliquid
                        ea eos!
                    </p>
                    <div className="flex gap-2 mb-4">
                        <LuCalendarDays size={24} />
                        <p className="font-medium text-[16px]">
                            Jum'at, 25 Mei 2025
                        </p>
                    </div>

                    <div className="flex gap-2 mb-4">
                        <MdOutlineLocationOn size={24} />
                        <p className="font-medium text-[16px]">
                            SMP Islam Simbang Wetan
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <ThemeProvider theme={myPrimary}>
                            <Button color="primary">Detail</Button>
                        </ThemeProvider>
                        <Button color="light">Akan Datang</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
