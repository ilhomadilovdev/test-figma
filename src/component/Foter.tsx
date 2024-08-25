
import { media } from "@/images/img/images"
import logo from "@/images/logo.png"
import { Link } from "react-router-dom"
export default function Foter() {
  return (
    <div className="  min-[320px]:w-[90%]  h-[400px] bg-[#F7F7F7]" >
      <div className="mt-40 ">
        <div className="  w-[1440px] ml-auto mr-auto min-[320px]:w-[90%] flex justify-between" >
          <img src={logo} alt="rasm" />
          <img className="w-52 h-9" src={media} alt="rasm" />
        </div>


        <div className="mt-20  w-[1440px] ml-auto mr-auto min-[320px]:w-[90%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[1043px] min-[320px]:w-[90%]" >
          <div >
              <h2 className="font-[Jost] text-[24px] font-medium leading-[30px] text-left text-[#333333]">Услуги</h2>
              <Link className="mt-2 font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Купить</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Арендовать</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Продать</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Оценить</Link><br/>
            </div>
            <div  >
              <h2 className="font-[Jost] text-[24px] font-medium leading-[30px] text-left text-[#333333]">Недвижимость</h2>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Квартиры</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/qurilish"}>Новостройки</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Дома и участки</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Коммерческая</Link><br/>
            </div>
            <div  >
              <h2 className="font-[Jost] text-[24px] font-medium leading-[30px] text-left text-[#333333]">Компания</h2>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/ocompany"}>О нас</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Блог</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Контакты</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/connect"}>Связаться</Link><br/>
            </div>
            <div  >
              <h2 className="font-[Jost] text-[24px] font-medium leading-[30px] text-left text-[#333333]">Другое</h2>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Ипотечный калькулятор</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>Инвестиции в недвижимость</Link><br/>
              <Link className="font-[Jost] text-[20px] font-normal leading-[28.9px] text-left text-[#333333] max-[600px]:leading-[23.12px] max-[600px]:text-[16px]" to={"/sotuv"}>в Дубае</Link><br/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
