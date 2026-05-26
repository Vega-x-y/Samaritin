export default function Logo() {
    return (
        <>
            <div className="relative flex h-10 w-full items-center justify-center overflow-hidden bg-black">
                <div className="absolute left-[-250px] h-[700px] w-[700px] rounded-full bg-orange-900/30 blur-3xl"></div>

                <div className="z-10 flex items-center gap-14">
                    <div className="relative flex items-center">
                        <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[10px] border-white">
                            <div className="flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-orange-500">
                                <div className="h-7 w-7 rounded-full bg-orange-500"></div>
                            </div>
                        </div>

                        <div className="h-5 w-40 rounded-r-md bg-white"></div>

                        <div className="absolute top-[95px] right-6 flex gap-3">
                            <div className="h-10 w-5 rounded-b-md bg-white"></div>
                            <div className="h-10 w-5 rounded-b-md bg-orange-500"></div>
                            <div className="h-10 w-5 rounded-b-md bg-white"></div>
                        </div>
                    </div>

                    <div className="h-44 w-[2px] bg-gray-600"></div>

                    <div className="flex flex-col">
                        <h1 className="font-serif text-7xl font-bold tracking-[10px] text-white">
                            SAMARITAIN
                        </h1>

                        <p className="mt-4 text-xl tracking-[10px] text-gray-300">
                            VIVEZ SEREINEMENT
                        </p>

                        <div className="mt-5 h-[4px] w-72 bg-orange-500"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
