import { photo2 } from "@/images/img/images"

export default function 
() {
  return (
    <div className="w-[1440px] mt-52 ml-auto mr-auto grid grid-cols-1 lg:grid-cols-2 gap-4 bg-[#EDF3F5]  min-[320px]:w-[90%]">
    <div className="  p-10 box-border  ]">
    <div>
       <h2 className="font-[Jost] text-[55px] font-medium leading-[70px] text-left text-[#333333]" >Остались вопросы? <br /> Свяжитесь c нами</h2>
       <input className="  bg-[#EDF3F5] mt-10 w-full md:w-[407px] h-[50px] px-0 py-[12px] gap-[10px] [border-bottom:1px_solid_#D6D6D6]" type="text" placeholder="ФИО" /><br/>
       <input  className="bg-[#EDF3F5] mt-6  w-full md:w-[407px] h-[50px] px-0 py-[12px] gap-[10px] [border-bottom:1px_solid_#D6D6D6]" type="number" placeholder="Номер телефона" /><br/>
       <input className="bg-[#EDF3F5] mt-6  w-full md:w-[407px] h-[50px] px-0 py-[12px] gap-[10px] [border-bottom:1px_solid_#D6D6D6]" type="email" placeholder="E-mail" /><br/>
       <textarea className=" bg-[#EDF3F5] mt-6  w-full md:w-[407px] h-[50px] px-0 py-[12px] gap-[10px] [border-bottom:1px_solid_#D6D6D6]" name="comment" id="comment" placeholder="Ваш вопрос" rows={2} cols={30}></textarea><br/>
       <button className=" bg-[#E1AF93] mt-16 w-[223px] h-[49px] px-[16px] py-[12px] "><span className=" text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Отправить</span></button>
     </div>
    </div>

     <img className=" h-auto max-[600px]::mt-10" src={photo2} alt="rasm" />
   </div>

  )
}
