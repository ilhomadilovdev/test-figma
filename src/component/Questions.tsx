import { number, number2, number3, number4 } from "@/images/img/images";


export default function Questions() {
  return (
    <div className="w-[1440px] ml-auto mr-auto mt-52 min-[320px]:w-[90%]">
    <h2 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Процесс покупки недвижимости</h2>

    <div className="mt-20 grid grid-cols-1 xl:grid-cols-4 gap-7 ">
      <div >
        <img className="w-24 h-24" src={number4} alt="rasm" />
        <h3 className=" mt-4 text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Консультация и подбор объекта</h3>
        <p className=" mt-4 text-[#858585] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Организуем просмотры объектов и помогаем вам оценить их преимущества и недостатки</p>
      </div>
      <div >
        <img className="w-24 h-24" src={number3} alt="rasm" />
        <h3 className=" mt-4 text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Юридическое сопровождение</h3>
        <p className=" mt-4 text-[#858585] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Обеспечение соблюдения законодательства и защиты интересов клиента</p>
      </div>
      <div >
        <img className="w-24 h-24" src={number2} alt="rasm" />
        <h3 className=" mt-4 text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Оформление сделки</h3>
        <p className=" mt-4 text-[#858585] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Подготовка и подписание всех необходимых документов. Осуществление  оплаты</p>
      </div>
      <div >
        <img className="w-24 h-24" src={number} alt="rasm" />
        <h3 className=" mt-4 text-[#333333] font-[Jost] text-[30px] font-medium leading-[36px] text-left">Услуги по управлению недвижимостью</h3>
        <p className=" mt-4 text-[#858585] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Наши специалисты обеспечат полный спектр услуг по управлению вашим объектом</p>
      </div>
    </div>
  </div>
  )
}
