import Contact from "@/component/Contact";
import Questions from "@/component/Questions";
import Size from "@/component/Size";
import { arr, arr2, bui, cart, cartls, carts, ggjj, iding, red, rfg, sbg, scree, sohil } from "@/images/img/images";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Page() {


  const [toggle, setToggle] = useState(1);

  const toggleTab = (idx: number) => {
    setToggle(idx);
  }
  return (
    <div  >

      <div id="carouselExampleControls" className="carousel slide  w-full mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-full " src={scree} alt="rasm" />
          </div>
          <div className="carousel-item">
            <img className="w-full " src={scree} alt="rasm" />
          </div>
          <div className="carousel-item">
            <img className="w-full " src={scree} alt="rasm" />
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


      <div className="w-[1440px] mt-80 ml-auto mr-auto min-[320px]:w-95%">
        <div className="flex justify-between">
          <div >
            <h2 className="font-[Jost] text-[80px] font-medium leading-[90px] text-left text-[#333333]">Infinity <br /> Клубный дом</h2>
            <button className="mt-4 bg-[#E1AF93] w-60 h-12" type="button"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Позвонить</span></button>
          </div>

          <div className=" w-[41%]">
            <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Дом имеет свой приватный, закрытый двор, с несколькими зонами отдыха для взрослых и детей. Отдельно предусмотрено помещение для консьержа и охраны. Из окон квартир открывается вид на эксклюзивный ландшафтный двор-парк общей площадью более 1 Га, с прогулочными аллеями, водными объектами и летним кинотеатром.</p>
            <div className="w-48">
              <div className=" mt-4 flex justify-between w-28  h-12">
                <button className="   w-[50px] h-[50px] " type="button" data-bs-target="#carouselExampleControlsy" data-bs-slide="prev">
                  <img src={arr} alt="rasm" />

                </button>
                <button className=" w-[50px] h-[50px]  " type="button" data-bs-target="#carouselExampleControlsy" data-bs-slide="next">
                  <img src={arr2} alt="rasm" />

                </button>
              </div>
            </div>
          </div>
        </div>



        <div className="mt-14">
          <div id="carouselExampleControlsy" className="carousel slide  w-full " data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={red} alt="rasm" />
              </div>
              <div className="carousel-item">
                <img src={red} alt="rasm" />
              </div>

            </div>



          </div>
        </div>

        <div className="w-full mt-48">
          <div className="flex justify-between">
            <h2 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Фотогалерея и видеотуры</h2>
            <div className="  flex justify-between w-28  h-12">
              <button className="   w-[50px] h-[50px] " type="button" data-bs-target="#carouselExampleControlsyt" data-bs-slide="prev">
                <img src={arr} alt="rasm" />

              </button>
              <button className=" w-[50px] h-[50px]  " type="button" data-bs-target="#carouselExampleControlsyt" data-bs-slide="next">
                <img src={arr2} alt="rasm" />

              </button>
            </div>
          </div>


          <div id="carouselExampleControlsyt" className="carousel slide mt-14 w-full " data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={sbg} alt="rasm" />
              </div>
              <div className="carousel-item">
                <img src={red} alt="rasm" />
              </div>

            </div>



          </div>


          <Link to={"/gallery"}><button className=" mt-12 ml-[45%] bg-[#E1AF93] w-56 h-12"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Посмотреть всё</span></button></Link>
        </div>







        <div className="mt-48">
          <h2 className="text-[#000000] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Планировки и доступные квартиры</h2>


          <div className="flex justify-between mt-12 w-[40%]">
            <div className="w-[144px] h-[53px] ">
              <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Этаж</p></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="w-[144px] h-[53px] ">
              <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Цена</p></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="w-[254px] h-[53px] ">
              <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Количество комнат</p></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <div className=" salom ">
              <img src={cart} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={cart} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={cartls} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={cart} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={carts} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={cart} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={cartls} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={cart} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={carts} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={cart} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={cart} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>
            <div className=" salom ">
              <img src={cart} alt="rasm" />
              <button className=" iiii"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Забронировать</span></button>
            </div>

          </div>

          <button className="bg-[#E1AF93] w-60 h-12 mt-8 ml-[45%]" type="button"><span className="text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Загрузить все</span></button>
        </div>


        <div className="mt-60">
          <h2 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Условия покупки</h2>
          <p className="text-[#858585] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Процесс покупки недвижимости в нашем агентстве разработан таким образом, <br /> чтобы обеспечить максимальное удобство и прозрачность для наших клиентов</p>



          <div >
            <div className="flex justify-between mt-14">
              <h2 className="text-[#333333] font-[Jost] text-[25px] font-medium leading-[36.13px] text-left">Требуемые документы</h2>
              <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Физ.лицам: паспорт, ИНН <br />
                Юр.лицам: учредительные документы, доверенность</p>
            </div>
            <div className=" flex justify-between mt-14">
              <h2 className="text-[#333333] font-[Jost] text-[25px] font-medium leading-[36.13px] text-left">Финансовые условия</h2>
              <p className="  text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">
                Способы оплаты: наличные, банковский   перевод, <br /> ипотека
                Доп.расходы: налоги,  комиссия агентства,  но<br />тариальные услуги</p>
            </div>


            <div className="flex justify-between  mt-14">
              <h2 className="text-[#333333] font-[Jost] text-[25px] font-medium leading-[36.13px] text-left">Ипотека и кредитование</h2>
              <p className="text-[#333333] font-[Jost] text-[20px] mr-[7%] font-normal leading-[28.9px] text-left">
                Варианты ипотеки
                Сотрудничающие банки</p>
            </div>
            <div className="flex justify-between mt-14">
              <h2 className="text-[#333333] font-[Jost] text-[25px] font-medium leading-[36.13px] text-left">Требуемые документы</h2>
              <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Физ.лицам: паспорт, ИНН <br />
                Юр.лицам: учредительные документы, доверенность</p>
            </div>
            <div className="flex justify-between mt-14">
              <h2 className="text-[#333333] font-[Jost] text-[25px] font-medium leading-[36.13px] text-left">Условия возврата и расторжения</h2>
              <p className="text-[#333333] mr-[6%] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">
                Порядок расторжения договора <br />
                Условия возврата средств (если применимо)</p>
            </div>
          </div>
        </div>

      </div>
 
      <div className="grid mt-40 w-[1440px] ml-auto mr-auto grid-cols-1 md:grid-cols-2 gap-8">
        <img src={rfg} alt="rasm" />
        <div className="">
          <h1 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">
            Инфраструктура района
          </h1>

          <div className="cat">
            <div
              className={toggle === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>
              <h2 >Магазины</h2>
            </div>
            <div
              className={toggle === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <h2 >Транспорт</h2>
            </div >
            <div className={toggle === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}>
              <h2 >Школы</h2>
            </div>
          </div>


          <div className="content-tabs">
            <div className={toggle === 1 ? "active-content" : "content"}>
              <p className="mt-10 text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Наш район предлагает широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены крупные супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса</p>

              <div className="mt-10 flex w-[441px] justify-between">
                <div>
                  <h2 className="text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Korzinka</h2>
                  <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">5 минут</p>
                </div>
                <div>
                  <h2 className="text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Havas</h2>
                  <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">10 минут</p>
                </div>
              </div>


              <div className="mt-10 w-[470px] flex justify-between">
                <div >
                  <h2 className="text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">FixPrice</h2>
                  <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Рядом</p>
                </div>
                <div >
                  <h2 className=" text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">REDTAG</h2>
                  <p className=" text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">25 минут</p>
                </div>
              </div>
            </div>


            <div className={toggle === 2 ? " active-content" : "content"}>
              <p className="mt-10 text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left"> широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены крупные супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса</p>

              <div className="mt-10 flex w-[441px] justify-between">
                <div>
                  <h2 className="text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Korzinka</h2>
                  <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">5 минут</p>
                </div>
                <div>
                  <h2 className="text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Havas</h2>
                  <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">10 минут</p>
                </div>
              </div>


              <div className="mt-10 w-[470px] flex justify-between">
                <div >
                  <h2 className="text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">FixPrice</h2>
                  <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Рядом</p>
                </div>
                <div >
                  <h2 className=" text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">REDTAG</h2>
                  <p className=" text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">25 минут</p>
                </div>
              </div>
            </div>


            <div className={toggle === 3 ? "active-content" : "content"}>
              <p className="mt-10 text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Наш район предлагает широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены крупные супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса</p>

              <div className="mt-10 flex w-[441px] justify-between">
                <div>
                  <h2 className="text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Korzinka</h2>
                  <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">5 минут</p>
                </div>
                <div>
                  <h2 className="text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Havas</h2>
                  <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">10 минут</p>
                </div>
              </div>


              <div className="mt-10 w-[470px] flex justify-between">
                <div >
                  <h2 className="text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">FixPrice</h2>
                  <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Рядом</p>
                </div>
                <div >
                  <h2 className=" text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">REDTAG</h2>
                  <p className=" text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">25 минут</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  



      <div className="w-[1440px] ml-auto mr-auto mt-80">
        <h2 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Отзывы покупателей</h2>


        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <img src={ggjj} alt="rasm" />
          <img src={ggjj} alt="rasm" />
          <img src={ggjj} alt="rasm" />
          <img src={ggjj} alt="rasm" />
        </div>

        <Link to={"/comments"}><button className="bg-[#E1AF93] w-64 h-12 mt-14 ml-[42%]" type="button"><span className=" text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Все отзывы</span></button></Link>
      </div>
      <Size />
      <Questions />
      <Contact />


      <div className="w-[1440px] mt-56 ml-auto mr-auto lg:w-[90%]">
        <h2 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Другие ЖК</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <img src={iding} alt="rasm" />
          <img src={bui} alt="rasm" />
          <img src={sohil} alt="rasm" />
        </div>
      </div>
    </div>
  )
}
