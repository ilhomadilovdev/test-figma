import Size from "@/component/Size";
import { buildd, buildd3, gg, hh, ing, jj, map, screen } from "@/images/img/images";
import Contact from "@/component/Contact";
import Blog from "./Blog";
import Questions from "@/component/Questions";
import Protecc from "@/component/Protecc";


export default function Dubai() {
  return (
    <div className="w-full ">
      <img src={screen} alt="rasm" />

      <div className="mt-48 w-[1440px] ml-auto mr-auto 
      grid grid-cols-1 md:grid-cols-2 gap-4 min-[320px]:w-[90%] max-[640px]:mt-20" >
        <img className="h-[680px] max-[640px]:h-auto" src={ing} alt="rasm" />
        <div  >
          <h2 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Вложите в будущее:<br /> Недвижимость в Дубае</h2>
          <p className="mt-4 text-[#858585] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Дубай, один из самых быстроразвивающихся
            городов мира, предлагает огромные возможности для
            инвестиций в недвижимость. Благоприятный инвестиционный
            климат, устойчивый рост экономики и высокий уровень жизни
            делают этот город привлекательным для инвесторов со всего мира
          </p>

          <div className=" w-[80%] mt-20 grid grid-cols-2 gap-4" >
            <div >
              <h2 className=" h-[74px] pl-[16px] pr-0 py-[8px] gap-[16px] [border-left:3px_solid_#E1AF93] opacity-[0px]">Отсутствие налогов на доходы <br /> от недвижимости</h2>
            </div>
            <div>
              <h2 className=" h-[74px] pl-[16px] pr-0 py-[8px] gap-[16px] [border-left:3px_solid_#E1AF93] opacity-[0px]" >Стабильная экономика  <br /> и растущий рынок</h2>
            </div>
          </div>
          <div className=" w-[80%] mt-10 grid grid-cols-2 gap-4" >
            <div >
              <h2 className=" h-[74px] pl-[16px] pr-0 py-[8px] gap-[16px] [border-left:3px_solid_#E1AF93] opacity-[0px]">Рост и возможности для <br /> получения высокого дохода</h2>
            </div>
            <div>
              <h2 className=" h-[74px] pl-[16px] pr-0 py-[8px] gap-[16px] [border-left:3px_solid_#E1AF93] opacity-[0px]" >Стратегическое расположение и инфраструктура</h2>
            </div>
          </div>
        </div>
      </div>



      <div className="mt-52 w-[1440px] ml-auto mr-auto max-[640px]:mt-20 min-[320px]:w-[90%] " >
        <h2 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left  max-[640px]:text-[30px] max-[640px]:leading-[38px]" >Основные районы для инвестиций
        </h2>
        <img className="mt-8" src={map} alt="rasm" />
      </div>



      <div className="mt-48 w-[1440px] ml-auto mr-auto  min-[320px]:w-[90%]">
        <h2 className="font-[Jost] text-[55px] font-medium leading-[70px] text-left text-[#333333]">Тип недвижимосты</h2>
        <div className="mt-5 flex justify-between">
          <img className="w-[66%] h-[600px]" src={buildd3} alt="rasm" />
          <img  className="w-[33%] h-[600px]" src={buildd} alt="rasm" />
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <img  src={hh} alt="rasm" />
          <img  src={gg} alt="rasm" />
          <img  src={jj} alt="rasm" />
        </div>
      </div>


      <Size />


      <Questions />


      <Protecc />

      <Contact />
      <Blog />
    </div>
  )
}
