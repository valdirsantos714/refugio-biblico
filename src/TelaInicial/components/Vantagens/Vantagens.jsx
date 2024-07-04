

export default function Vantagens() {
    return (
        <main>
            <section id="vantagens" className="">
                {/*Container */}
                <div className="2xl:flex 2xl:flex-row 2xl:gap-[1rem]  2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-[100%]">

                <div className="flex flex-col-reverse bg-cores-azul text-cores-branco lg:flex-row p-[1.4rem] gap-[1.4rem] justify-center items-center 2xl:flex-col-reverse 2xl:w-[100%]">

                    <div className=" text-center  lg:text-center ">
                        <h2 className="text-[1.5rem] lg:text-[1.7rem] pb-[0.4rem]">Você tem dúvidas sobre a Bíblia? </h2>
                        <p className="text-[1.4rem] lg:text-[1.4rem]">Não entende o que quer dizer as coisas que estão na Bíblia? Então tire todas as suas dúvidas aqui na nossa ferramenta de tirar dúvidas!</p>
                    </div>

                    <img src="/duvidas.jpg" alt="Homem com dúvidas" className="lg:w-2/5 "/>
                </div>

                <div  className="flex flex-col-reverse bg-cores-azul_fraco text-cores-azul lg:flex-row p-[1.4rem] gap-[1.4rem] justify-center items-center  2xl:flex-col-reverse 2xl:w-[100%]">

                    <div className=" text-center  lg:text-center ">
                        <h2 className="text-[1.5rem] lg:text-[1.7rem] pb-[0.4rem]">Conecte-se com Deus agora mesmo!</h2>
                        <p className="text-[1.4rem] lg:text-[1.4rem]">Leia a Bíblia agora mesmo através de nosso site e veja o que Deus quer falar com você!</p>
                    </div>

                    <img src="/biblia-aberta.jpg" alt="Bíblia aberta" className="lg:w-2/5"/>
                </div>
                </div>

                <div className="2xl:flex 2xl:flex-row 2xl:gap-[1rem]  2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-[100%]">

                <div className="flex flex-col-reverse bg-cores-branco text-cores-azul lg:flex-row p-[1.4rem] gap-[1.4rem] justify-center items-center 2xl:flex-col-reverse 2xl:w-[100%]">

                    <div className=" text-center  lg:text-center ">
                        <h2 className="text-[1.5rem] lg:text-[1.7rem] pb-[0.4rem]">Ajunte tesouros não na terra mas sim no céu!</h2>
                        <p className="text-[1.4rem] lg:text-[1.4rem]">Através da Bíblia é possível isso!</p>
                    </div>

                    <img src="/pessoas-na-igreja.jpg" alt="Pessoas na igreja.jpg" className="lg:w-2/5"/>
                </div>


                <div className="flex flex-col-reverse bg-cores-azul_medio text-cores-branco lg:flex-row p-[1.4rem] gap-[1.4rem] justify-center items-center 2xl:flex-col-reverse 2xl:w-[100%]">

                    <div className=" text-center  lg:text-center ">
                        <h2 className="text-[1.5rem] lg:text-[1.7rem] pb-[0.4rem]">Seja uma pessoa mais feliz hoje mesmo!</h2>
                        <p className="text-[1.4rem] lg:text-[1.4rem]">Leia a Bíblia e descubra como ser feliz através da palavra de Deus</p>
                    </div>

                    <img src="/pessoas felizes.jpg" alt="Pessoas felizes" className="lg:w-2/5"/>
                </div>
            </div>
            </section>
        </main>
    )
}