export default function CardMisi({ icon, misi }) {
    return (
        <>
            <div className="flex flex-col w-xl p-6 border border-gray-200 rounded-lg gap-4 justify-center items-center">
                <div className="w-[100px] h-[100px]">
                    <div className="bg-[#00CC9A] p-8 rounded-full flex justify-center text-white font-bold text-3xl">
                        {icon}
                    </div>
                </div>
                <p className="text-sm text-center">{misi}</p>
            </div>
        </>
    );
}
