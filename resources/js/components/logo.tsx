export default function Logo() {
    return(
        <>
            <div className="w-full h-10 bg-black flex items-center justify-center overflow-hidden relative">

    <div className="absolute left-[-250px] w-[700px] h-[700px] bg-orange-900/30 rounded-full blur-3xl"></div>

    <div className="flex items-center gap-14 z-10">

        <div className="relative flex items-center">

        <div className="relative w-44 h-44 rounded-full border-[10px] border-white flex items-center justify-center">

            <div className="w-32 h-32 rounded-full border-[6px] border-orange-500 flex items-center justify-center">

            <div className="w-7 h-7 bg-orange-500 rounded-full"></div>

            </div>
        </div>

        <div className="w-40 h-5 bg-white rounded-r-md"></div>

        <div className="absolute right-6 top-[95px] flex gap-3">
            <div className="w-5 h-10 bg-white rounded-b-md"></div>
            <div className="w-5 h-10 bg-orange-500 rounded-b-md"></div>
            <div className="w-5 h-10 bg-white rounded-b-md"></div>
        </div>

    </div>

    <div className="w-[2px] h-44 bg-gray-600"></div>

    <div className="flex flex-col">

      <h1 className="text-white text-7xl font-serif tracking-[10px] font-bold">
        SAMARITAIN
      </h1>

      <p className="text-gray-300 tracking-[10px] text-xl mt-4">
        VIVEZ SEREINEMENT
      </p>

      <div className="w-72 h-[4px] bg-orange-500 mt-5"></div>

    </div>

    </div>

    </div>
        </>
    )
}