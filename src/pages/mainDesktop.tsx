
import Contact from "@/component/Contact";
import Size from "@/component/Size";
import { cal5, photo, img, text, text2, text3, text4, text5, build2, build3, arr, arr2 } from "@/images/img/images";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import { useState } from "react";




export default function MainDesktop() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (idx: number) => {
    setToggle(idx);
  }
  return (
    <div className="">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cal5} alt="rasm" className="d-block w" />
          </div>
          <div className="carousel-item">
            <img src={cal5} alt="rasm" className="d-block w-full" />
          </div>
          <div className="carousel-item">
            <img src={cal5} alt="rasm" className="d-block w-full" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      <div>
        <div className=" mt-40  max-[620px]:mt-20  w-[1440px] ml-auto mr-auto  grid grid-cols-1 lg:grid-cols-2 gap-8   min-[320px]:w-[90%]">

          <h2 className="  justify-between text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] md:text-[50px] md:leading-[50px] text-left">О компании <br /> <span className="text-[#E1AF93] font-[Jost] text-[55px] font-medium leading-[70px] md:text-[50px] md:leading-[50px] text-left">RMC DE LUXE</span></h2>




          <div className="cats">
            <div className="cat  gg">
              <div
                className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}>
                <h2  >Аренда</h2>
              </div>
              <div
                className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                <h2 >Купля - продажа</h2>
              </div >
              <div className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}>
                <h2 >Управление</h2>
              </div>
            </div>


            <div className="content-tabs ">
              <div className={toggle === 1 ? "active-content" : "content"}>
                <p className="mt-10 text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">
                  Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности <br /><br /> Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков
                </p>

              </div>


              <div className={toggle === 2 ? " active-content" : "content"}>
                <p className="mt-10 text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">
                  Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности <br /> тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков
                </p>



              </div>


              <div className={toggle === 3 ? "active-content" : "content"}>
                <p className="mt-10 text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">
                  Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребностироверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков
                </p>



              </div>
            </div>
          </div>
        </div>











        <div className=" w-[1440px] mt-14 ml-auto mr-auto min-[320px]:w-[90%]" >
          <div id="carouselExampleControlsd" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={photo} alt="rasm" />
              </div>
              <div className="carousel-item">
                <img src={photo} alt="rasm" />
              </div>
              <div className="carousel-item ">
                <img src={cal5} alt="rasm" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsd" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsd" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>















      <div className="dubai
                   w-full  
                 bg-[#EDF3F5] mt-56 min-[480px]:mt-20"
      >
        <div className="  box-border px-[40px] py-[80px]  w-[1440px] ml-auto mr-auto min-[320px]:w-full grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className=" w-[710px] min-[320px]:w-full ">
            <h2 className="dub font-[Jost] text-[55px] font-medium leading-[70px] text-left max-[700px]:leading-[50px]  max-[700px]:text-[45px]  ">Инвестиции в недвижимость в Дубае</h2>

            <p className="  mt-10 p-text font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">
              Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода и увеличения капитала
              <br />
              <br />
              Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и их реализации.
              <br />
              <br />
              Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое качество обслуживания и надежность.
              <br />
              <br />
              Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её сохранность и стабильный доход. Мы берем на себя все аспекты управления, включая подбор и проверку арендаторов,
              техническое обслуживание, финансовую отчетность и юридическую поддержку.
            </p>
            <Link to={"/dubai"}>
              <button className="  mt-9 bg-[#E1AF93] w-72 h-[49pxpx] px-[16px] py-[12px] gap-[10px] opacity-[0px]"><span className=" text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Подробное</span></button>
            </Link>
          </div>
          <img src={img} alt="rasm" className="w-[588px] lg:w-[90%] h-auto ml-[5%] " />
        </div>
      </div>


      <div className="w-[1440px] ml-[5%] mt-32 min-[320px]:w-[90%]" >
        <h2 className="font-[Jost] text-[55px] font-medium leading-[70px] text-left  max-[640 px]:text-[35px] max-[640 px]:leading-[38px]   " >
          Что входит в услугу
          <br /> управления недвижимостью
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 w-[90%]  " >
          <div className="flex justify-between  mt-8  border-[1px] ">
            <img src={text} alt="rasm" className="w-[30px] h-[30px]" />
            <p className=" ml-2 font-[Jost] text-[24px] font-normal leading-[34.68px] text-left max-[640 px]: leading-[26.68px] max-[640 px]:text-[18px]">Проверка арендаторов (кредитная история, рекомендации)</p>
          </div>
          <div className="flex justify-between  mt-8  border-[1px] ">
            <img src={text} alt="rasm" className="w-[30px] h-[30px]" />
            <p className=" ml-2 font-[Jost] text-[24px] font-normal leading-[34.68px] text-left">Регулярное техническое обслуживание</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 w-[90%] " >
          <div className="flex justify-between  mt-8  border-[1px] ">
            <img src={text} alt="rasm" className="w-[30px] h-[30px]" />
            <p className=" ml-2 font-[Jost] text-[24px] font-normal leading-[34.68px] text-left">Подготовка и подписание договоров аренды</p>
          </div>
          <div className="flex justify-between  mt-8  border-[1px] ">
            <img src={text} alt="rasm" className="w-[30px] h-[30px]" />
            <p className=" ml-2 font-[Jost] text-[24px] font-normal leading-[34.68px] text-left">Организация и проведение ремонтных работ</p>
          </div>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 w-[90%] " >
          <div className="flex justify-between  mt-8  border-[1px] ">
            <img src={text} alt="rasm" className="w-[30px] h-[30px]" />
            <p className=" ml-2 font-[Jost] text-[24px] font-normal leading-[34.68px] text-left">Сбор арендной платы</p>
          </div>
          <div className="flex justify-between  mt-8  border-[1px] ">
            <img src={text} alt="rasm" className="w-[30px] h-[30px]" />
            <p className=" ml-2 font-[Jost] text-[24px] font-normal leading-[34.68px] text-left">Регулярное техническое обслуживание</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 w-[90%] " >
          <div className="flex justify-between  mt-8  border-[1px] ">
            <img src={text} alt="rasm" className="w-[30px] h-[30px]" />
            <p className=" ml-2 font-[Jost] text-[24px] font-normal leading-[34.68px] text-left">Обработка запросов и жалоб арендаторов</p>
          </div>
          <div className="flex justify-between  mt-8  border-[1px] ">
            <img src={text} alt="rasm" className="w-[30px] h-[30px]" />
            <p className=" ml-2 font-[Jost] text-[24px] font-normal leading-[34.68px] text-left">Подбор надежных арендаторов</p>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 w-[90%] " >
          <div className="flex justify-between  mt-8  border-[1px] ">
            <img src={text} alt="rasm" className="w-[30px] h-[30px]" />
            <p className=" ml-2 font-[Jost] text-[24px] font-normal leading-[34.68px] text-left">Контроль соблюдения условий аренды</p>
          </div>

        </div>
      </div>



      <div className="w-[1440px]   ml-auto mr-auto mt-56 min-[320px]:w-[90%] max-[640px]:mt-20 " >
        <h2 className="font-[Jost] text-[55px] font-medium leading-[70px] text-left   max-[640px]:text-[45px] max-[640px]:leading-[50px]" >Почему выбирают нас</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   mt-6 ">
          <div className="border-[1px] pt-[90px] pl-[31px] box-border" >
            <h2 className="font-[Jost] text-[30px] font-medium leading-[36px] text-left">Опыт и профессионализм</h2>
            <p className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left  mt-3">Наши специалисты имеют многолетний опыт в <br /> различных сферах недвижимости,
              что гарантирует высокое качество услуг</p>
          </div>
          <div className=" border-[1px] " ><img src={text2} alt="" /></div>
          <div className=" border-[1px]  pt-[90px] pl-[31px] box-border" >
            <h2 className="font-[Jost] text-[30px] font-medium leading-[36px] text-left">Прозрачность и доверие</h2>
            <p className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left  mt-3">Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами</p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
          <div className=" border-[1px] " ><img src={text3} alt="" /></div>
          <div className=" border-[1px]  pt-[90px] pl-[31px] box-border" >
            <h2 className="font-[Jost] text-[30px] font-medium leading-[36px] text-left">Прозрачность и доверие</h2>
            <p className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left  mt-3">Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами</p>
          </div>
          <div className=" border-[1px] " ><img src={text4} alt="" /></div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
          <div className=" border-[1px] pt-[90px] pl-[31px] box-border" >
            <h2 className="font-[Jost] text-[30px] font-medium leading-[36px] text-left">Индивидуальный подход</h2>
            <p className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left  mt-3">
              Мы разрабатываем персонализированные решения, учитывая уникальные потребности каждого клиента
            </p>
          </div>
          <div className=" border-[1px] " ><img src={text5} alt="" /></div>
          <div className="border-[1px]  pt-[90px] pl-[31px] box-border" >
            <h2 className="font-[Jost] text-[30px] font-medium leading-[36px] text-left">Комплексное обслуживание</h2>
            <p className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left  mt-3">Полный спектр услуг, включающий аренду, куплю-продажу, управление и инвестиции в недвижимость.</p>
          </div>
        </div>

      </div>





      <div className=" w-[1440px] ml-auto mr-auto mt-32 min-[320px]:w-[90%]">
        <div className="flex justify-between " >
          <h2 className="font-[Jost] text-[55px] font-medium leading-[70px] text-left max-[640px]:text-[20px] max-[640px]:leading-[38px]">Новостройки</h2>
          <div className=" flex justify-between w-[125px] h-[55px]">
            <button className="  w-[70px] h-[70px] " type="button" data-bs-target="#carouselExampleControlst" data-bs-slide="prev">
              <img src={arr} alt="rasm" />

            </button>
            <button className="  w-[70px] h-[70px] ml-1   " type="button" data-bs-target="#carouselExampleControlst" data-bs-slide="next">
              <img src={arr2} alt="rasm" />

            </button>
          </div>
        </div>
        <div className="mt-7" >

          <div id="carouselExampleControlst" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  " >
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build2} alt="rasm" />
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build2} alt="rasm" />
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build3} alt="rasm" />
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build3} alt="rasm" />
                </div>
              </div>
              <div className="carousel-item ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 " >
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build2} alt="rasm" />
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build2} alt="rasm" />
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build3} alt="rasm" />
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build3} alt="rasm" />
                </div>
              </div>
              <div className="carousel-item ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 " >
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build2} alt="rasm" />
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build2} alt="rasm" />
                  <img className=" h-[600px] pl-0 pr-0 py-[24px]" src={build3} alt="rasm" />
                  <img className="h-[600px] pl-0 pr-0 py-[24px]" src={build3} alt="rasm" />
                </div>
              </div>
            </div>

          </div>



          <Link to={"/build"}>
            <button className="w-[223px] mt-9 ml-[45%]  h-[49px]  px-[16px] py-[12px] bg-[#E1AF93] gap-[10px] opacity-[0px]"><span className="font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left text-[#FFFFFF]">Смотреть все</span></button>
          </Link>
        </div>




      </div>

      <Size />
      <Contact />
      <Blog />




    </div>
  )
}

