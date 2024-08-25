import { cardsf, ff, line, medi, rest, ret, rt } from "@/images/img/images";
import { Link } from "react-router-dom"

export default function State_id() {
  return (
    <>
      <div className="w-[66.25%] ml-auto mr-auto">
        <div className="w-52 flex justify-between">
          <h2 className="text-[#E1AF93] font-[Jost] text-[20px] font-medium leading-[28.9px] text-left">01.08.2024</h2>

          <div className=" flex justify-between">
            <img src={line} alt="rasm" />
            <h2 className="text-[#B3B3B3] ml-1 font-[Jost] text-[20px] font-medium leading-[28.9px] text-left">235</h2>
          </div>
        </div>

        <h1 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Современные жилые комплексы предлагают расширенные удобства для жителей</h1>

        <img className="mt-4 w-full" src={cardsf} alt="rasm" />
        <p className=" mt-4 text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">В последние годы современные жилые комплексы становятся не просто местом для проживания, а <br /> настоящими центрами удобства и комфорта. Архитекторы и девелоперы все больше внимания уделяют созданию условий, которые способствуют улучшению качества жизни и удовлетворению потребностей <br /> жителей.</p>

        <h2 className="mt-10 text-[#333333] font-[Jost] text-[24px] font-medium leading-[30px] text-left">Расширенные удобства: фитнес-центры, спа и зеленые зоны</h2>
        <p className=" mt-4 text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">В последние годы современные жилые комплексы становятся не просто местом для проживания, а настоящими центрами удобства и комфорта. Архитекторы и девелоперы все больше внимания уделяют созданию условий, которые способствуют улучшению качества жизни и удовлетворению потребностей жителей.</p>



        <h2 className="mt-14 text-[#333333] font-[Jost] text-[24px] font-medium leading-[30px] text-left">Продуманная инфраструктура и умные технологии для комфорта</h2>
        <p className=" mt-4 text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">
          Ключевым элементом современных жилых комплексов является продуманная инфраструктура. Квартиры имеют современные планировки и высококачественные отделочные материалы, а также энергоэффективные технологии, которые помогают снижать затраты на коммунальные услуги. Некоторые комплексы предлагают умные системы управления домом, которые позволяют контролировать освещение, климат и безопасность через мобильные приложения
        </p>


        <img className="mt-14" src={rt} alt="rasm" />


        <h2 className="mt-14 text-[#333333] font-[Jost] text-[24px] font-medium leading-[30px] text-left">Современные технологии и улучшение качества жизни</h2>
        <p className=" mt-4 text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Таким образом, современные жилые комплексы становятся не только местом для проживания, но и пространством, где каждый элемент продуман для создания максимального удобства и комфорта. Это делает их привлекательными для тех, кто ценит качество жизни и хочет наслаждаться всеми преимуществами современных технологий и услуг</p>


      </div>


      <div className="mt-52 bg-[#EDF3F5]">
        <div className="w-[1440px] flex justify-between ml-auto mr-auto">
          <img className="w-[710px] " src={cardsf} alt="rasm" />
          <div className="w-[27.77%]  mt-20 mr-[20%]">
            <h2 className="text-[#333333] font-[Jost] text-[35px] font-semibold leading-[50.58px] text-left">Поделитесь новостью</h2>
            <div className="flex justify-between">
              <button className="bg-[#E1AF93] w-60 h-12"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Копировать ссылку</span></button>
              <img src={medi} alt="rasm" />
            </div>
          </div>
        </div>
      </div>







      <div className="w-[1440px] ml-auto mr-auto mt-48" >
        <h2 className="font-[Jost] text-[55px] font-medium leading-[70px] text-left" >Другие статьи</h2>
        <div className="mt-8" >
          <div id="carouselExampleContro" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="flex justify-between " >
                  <div className="w-[32%]  ">
                    <img src={rest} alt="rasm" />
                    <p className="  relative top-[-55px] left-[25px] w-28  font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">31.07.2024</p>
                    <div className="w-16 h-7 flex justify-between relative top-[-85px] right-[-80%] ">
                      <img src={ff} alt="rasm" />
                      <p className="font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">899</p>
                    </div>
                    <h3 className=" font-[Jost] text-[24px] font-medium leading-[30px] text-left">Тенденции и прогнозы рынка недвижимости на 2024 год</h3>
                    <Link to={""} className=" mt-3 font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left text-[#E1AF93]" >Подробное</Link>
                  </div>


                  <div className="w-[32%] h-[426px] ">
                    <img src={ret} alt="rasm" />
                    <p className="  relative top-[-55px] left-[25px] w-28  font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">31.07.2024</p>
                    <div className="w-16 h-7 flex justify-between relative top-[-85px] right-[-80%] ">
                      <img src={ff} alt="rasm" />
                      <p className="font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">899</p>
                    </div>
                    <h3 className=" font-[Jost] text-[24px] font-medium leading-[30px] text-left">

                      Лучшие районы для инвестиций в недвижимость
                    </h3>
                    <Link to={""} className=" mt-3 font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left text-[#E1AF93]" >Подробное</Link>

                  </div>
                  <div className="w-[32%] h-[426px] ">
                    <img src={rest} alt="rasm" />
                    <p className="  relative top-[-55px] left-[25px] w-28  font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">31.07.2024</p>
                    <div className="w-16 h-7 flex justify-between relative top-[-85px] right-[-80%] ">
                      <img src={ff} alt="rasm" />
                      <p className="font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">899</p>
                    </div>
                    <h3 className=" font-[Jost] text-[24px] font-medium leading-[30px] text-left">Топ-10 новых <br />
                      жилых комплексов</h3>
                    <Link to={""} className=" mt-3 font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left text-[#E1AF93]" >Подробное</Link>
                  </div>

                </div>
              </div>
              <div className="carousel-item ">
                <div className="flex justify-between " >
                  <div className="w-[32%]  ">
                    <img src={rest} alt="rasm" />
                    <p className="  relative top-[-55px] left-[25px] w-28  font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">31.07.2024</p>
                    <div className="w-16 h-7 flex justify-between relative top-[-85px] right-[-80%] ">
                      <img src={ff} alt="rasm" />
                      <p className="font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">899</p>
                    </div>
                    <h3 className=" font-[Jost] text-[24px] font-medium leading-[30px] text-left">Тенденции и прогнозы рынка недвижимости на 2024 год</h3>
                    <Link to={""} className=" mt-3 font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left text-[#E1AF93]" >Подробное</Link>
                  </div>


                  <div className="w-[32%] h-[426px] ">
                    <img src={ret} alt="rasm" />
                    <p className="  relative top-[-55px] left-[25px] w-28  font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">31.07.2024</p>
                    <div className="w-16 h-7 flex justify-between relative top-[-85px] right-[-80%] ">
                      <img src={ff} alt="rasm" />
                      <p className="font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">899</p>
                    </div>
                    <h3 className=" font-[Jost] text-[24px] font-medium leading-[30px] text-left">

                      Лучшие районы для инвестиций в недвижимость
                    </h3>
                    <Link to={""} className=" mt-3 font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left text-[#E1AF93]" >Подробное</Link>

                  </div>
                  <div className="w-[32%] h-[426px] ">
                    <img src={rest} alt="rasm" />
                    <p className="  relative top-[-55px] left-[25px] w-28  font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">31.07.2024</p>
                    <div className="w-16 h-7 flex justify-between relative top-[-85px] right-[-80%] ">
                      <img src={ff} alt="rasm" />
                      <p className="font-[Jost] text-[20px] font-medium leading-[28.9px] text-left text-[#FFFFFF]">899</p>
                    </div>
                    <h3 className=" font-[Jost] text-[24px] font-medium leading-[30px] text-left">Топ-10 новых <br />
                      жилых комплексов</h3>
                    <Link to={""} className=" mt-3 font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left text-[#E1AF93]" >Подробное</Link>
                  </div>

                </div>
              </div>



            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleContro" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleContro" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>


          <Link to={"/stat"}><button className=" mt-24 ml-[45%] w-[223px] h-[49px] px-[16px] py-[12px] gap-[10px] opacity-[0px] bg-[#E1AF93]" type="button"><span className="font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left text-[#FFFFFF]"> Все статьи</span></button></Link>
        </div>
      </div>

    </>
  )
}
