import Contact from "@/component/Contact";
import Partnyor from "@/component/Partnyor";
import { mmn, text, text2, text3, text4, text5, www, wwwe, wwwh, xxx } from "@/images/img/images";



export default function Ocompany() {
    return (
        <>
            <img className="w-full mt-4" src={mmn} alt="rasm" />

            <div className="w-[1440px] ml-auto mr-auto min-[320px]:w-[95%]">

                <div className="lg:mt-56 md:mt-20 max-[630px]:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <h2 className="text-[#333333] font-[Jost] lg:text-[55px] font-medium lg:leading-[70px] text-left sm:text-[45px] sm:-leading-[50px] max-[640px]:text-[30px] max-[640px]:leading-[38px]">О компании <br /> <span className="text-[#E1AF93] font-[Jost] lg:text-[55px] font-medium lg:leading-[70px] text-left sm:text-[45px] sm:-leading-[50px] max-[640px]:text-[30px] max-[640px]:leading-[38px]">RMC DE LUXE</span></h2>
                    <div className=" grid  sm:grid-cols-1 md:grid-cols-2 gap-4">
                        <h2 className="text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16px] max-[640px]:leading-[23.12px]">RMC De Luxe — это риэлторское агентство в Ташкенте, специализирующееся на оценке, аренде и продаже недвижимости. Компания нацелена на предоставление высококачественных и комплексных услуг в сфере недвижимости для физических лиц и корпоративных клиентов</h2>
                        <h2 className="text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16px] max-[640px]:leading-[23.12px]">С целью удовлетворения потребностей клиентов, компания обеспечивает профессиональный подход, индивидуальное обслуживание и инновационные решения</h2>
                    </div>
                </div>

                <img className="lg:mt-20 sm:mt-10  max-[640px]:mt-14" src={xxx} alt="rasm" />
            </div>

            <div className="w-[1440px] ml-auto mr-auto lg:mt-40  sm:mt-20 max-[640px]:mt-10 min-[320px]:w-[95%]">
                <h2 className="text-[#333333] font-[Jost] lg:text-[55px] font-medium lg:leading-[70px] text-left sm:text-[45px] sm:leading-[50px] max-[640px]:text-[30px] max-[640px]:leading-[38px]">Услуги</h2>
                <p className="mt-2 text-[#858585] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Мы предлагаем широкий спектр услуг для наших клиентов</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="mt-4 p-[24px] box-border w-[580px]   h-80 bg-[#EDF3F5]">
                        <h2 className="text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Оценка недвижимости</h2>
                        <div className=" flex mt-4 justify-between text-center gap-2">
                            <img className="w-6 h-6" src={text} alt="rasm" />
                            <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Проведение экспертных оценок рыночной стоимости недвижимости</p>
                        </div>
                        <div className=" w-[65%] flex mt-4 gap-2 justify-between text-center ">
                            <img className="w-6 h-6" src={text} alt="rasm" />
                            <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left"> Анализ рынка и подготовка отчетов</p>
                        </div>
                    </div>

                    <img className="mt-4  h-80" src={www} alt="rasm" />
                    <img className="mt-4  h-80" src={wwwe} alt="rasm" />
                    <img className="mt-4 h-80" src={wwwh} alt="rasm" />

                </div>
            </div>


            <div className="w-[1440px]  ml-auto mr-auto mt-32 sm:mt-20 max-[640px]:mt-10 min-[320px]:w-[95%] " >
                <h2 className="font-[Jost] lg:text-[55px] font-medium lg:leading-[70px] text-left sm:text-[45px] sm:leading-[50px] max-[640px]:text-[30px] max-[640px]:leading-[38px]" >Почему выбирают нас</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
                    <div className=" border-[1px] sm:pt-[90px] max-[620px]:pt-[45px] pl-[31px] box-border" >
                        <h2 className="font-[Jost] sm:text-[30px] font-medium sm:leading-[36px] text-left max-[620px]:text-[22px]  max-[620px]:leading-[28px]">Опыт и профессионализм</h2>
                        <p className="font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[620px]:text-[16px]  max-[620px]:leading-[23px]  mt-3">Наши специалисты имеют многолетний опыт в <br /> различных сферах недвижимости,
                            что гарантирует высокое качество услуг</p>
                    </div>
                    <div className=" border-[1px] " ><img src={text2} alt="" /></div>
                    <div className=" border-[1px]  pt-[90px] pl-[31px] box-border" >
                        <h2 className="font-[Jost] sm:text-[30px] font-medium sm:leading-[36px] text-left max-[620px]:text-[22px]  max-[620px]:leading-[28px]">Прозрачность и доверие</h2>
                        <p className="font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[620px]:text-[16px]  max-[620px]:leading-[23px]   mt-3">Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами</p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
                    <div className=" border-[1px] " ><img src={text3} alt="" /></div>
                    <div className=" border-[1px]  pt-[90px] pl-[31px] box-border" >
                        <h2 className="font-[Jost] sm:text-[30px] font-medium sm:leading-[36px] text-left max-[620px]:text-[22px]  max-[620px]:leading-[28px]">Прозрачность и доверие</h2>
                        <p className="font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[620px]:text-[16px]  max-[620px]:leading-[23px]  mt-3">Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами</p>
                    </div>
                    <div className=" border-[1px] " ><img src={text4} alt="" /></div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
                    <div className=" border-[1px] pt-[90px] pl-[31px] box-border" >
                        <h2 className="font-[Jost] sm:text-[30px] font-medium sm:leading-[36px] text-left max-[620px]:text-[22px]  max-[620px]:leading-[28px]">Индивидуальный подход</h2>
                        <p className="font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[620px]:text-[16px]  max-[620px]:leading-[23px]   mt-3">
                            Мы разрабатываем персонализированные решения, учитывая уникальные потребности каждого клиента
                        </p>
                    </div>
                    <div className="border-[1px] " ><img src={text5} alt="" /></div>
                    <div className=" border-[1px]  pt-[90px] pl-[31px] box-border" >
                        <h2 className="font-[Jost] sm:text-[30px] font-medium sm:leading-[36px] text-left max-[620px]:text-[22px]  max-[620px]:leading-[28px]">Комплексное обслуживание</h2>
                        <p className="font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[620px]:text-[16px]  max-[620px]:leading-[23px]   mt-3">Полный спектр услуг, включающий аренду, куплю-продажу, управление и инвестиции в недвижимость.</p>
                    </div>
                </div>

            </div>

            <Partnyor />

            <Contact />

        </>
    )
}
