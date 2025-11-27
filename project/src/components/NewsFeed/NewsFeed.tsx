
const NewsFeed = () => {
    return (
        <div className="w-[1160px] my-[112.15px]">
            <p className="text-[rgba(246,246,246,1)] font-extrabold text-[48px] leading-[150%] tracking-[-1.1%]">Últimas Notícias</p>

            <div className="mt-10 flex gap-10 h-[488px]">
                <div className="w-[860px] h-[488px] rounded-2xl overflow-hidden transition duration-300 hover:scale-95 hover:opacity-50 hover:cursor-pointer">
                    <img className="object-cover w-full h-[352px]" src="/images/news.jpg" alt="" />
                    <div className="h-full bg-[rgba(2,2,2,1)] pl-8 pt-5">
                        <p className="text-[rgba(255,255,255,1)] font-medium text-[32px] leading-[150%] tracking-[-1.1%]">Grand Theft Auto VI - Veja o 1º trailer agora</p>
                        <p className="mt-5 text-[rgba(121,121,121,1)] font-light text-[16px] leading-[150%] tracking-[-1.1%]">Rockstar Games      5 de dezembro de 2023</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">

                    <div className="w-[260px] h-56 rounded-2xl overflow-hidden transition duration-300 hover:scale-95 hover:opacity-50 hover:cursor-pointer">
                        <img className="object-cover w-full" src="/images/news2.png" alt="" />
                        <div className="h-full bg-[rgba(2,2,2,1)] pl-3 pt-2">
                            <p className="text-[rgba(255,255,255,1)] font-medium text-[13px] leading-[150%] tracking-[-1.1%]">1º Trailer. Terça-feira, 5 de<br /> Dezembro. 9h Et.</p>
                            <p className="mt-1 text-[rgba(121,121,121,1)] font-light text-[12px] leading-[150%] tracking-[-1.1%]">Rockstar Games      1  de dezembro de 2023</p>
                        </div>
                    </div>

                    <div className="w-[260px] h-56 rounded-2xl overflow-hidden transition duration-300 hover:scale-95 hover:opacity-50 hover:cursor-pointer">
                        <img className="object-cover w-full" src="/images/news3.png" alt="" />
                        <div className="h-full bg-[rgba(2,2,2,1)] pl-3 pt-2">
                            <p className="text-[rgba(255,255,255,1)] font-medium text-[13px] leading-[150%] tracking-[-1.1%]">Nova atualização de GTA Online chegando em dezembro</p>
                            <p className="mt-1 text-[rgba(121,121,121,1)] font-light text-[12px] leading-[150%] tracking-[-1.1%]">GTA Online      30 de novembro de 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed 