
export default function Size() {
  return (
    <div className="w-[1440px] ml-auto mr-auto   mt-48  min-[320px]:w-[90%]     " >
      <h2 className="  font-[Jost] text-[55px] font-medium leading-[70px] text-left  max-[640px]:text-[30px]  max-[640px]:leading-[38px]">Рассчитайте ипотеку</h2>
      <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 p-[40px] box-border  " >

        <div >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-[95%] " >
            <div >
              <label className="font-[Jost] text-[16px] font-normal leading-[23.12px] text-left text-[#858585]" htmlFor="fmane" >
                Стоимость недвижимости (y.e.)
              </label><br />
              <input className="w-full lg:w-[280px] h-[50px] px-[16px] py-[12px] gap-[10px] border-[1px]  opacity-[0px] mt-2  " type="number" placeholder="Введите стоимость" />
            </div>
            <div >
              <label className="font-[Jost] text-[16px] font-normal leading-[23.12px] text-left text-[#858585]" htmlFor="fmane" >
                Первоначальный взнос (y.e.)
              </label><br />
              <input className="w-full lg:w-[280px] h-[50px] px-[16px] py-[12px] gap-[10px] border-[1px]  opacity-[0px] mt-2" type="number" placeholder="Введите размер взноса" />
            </div>
          </div>



          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-[95%]  mt-5 " >
            <div >
              <label className="font-[Jost] text-[16px] font-normal leading-[23.12px] text-left text-[#858585]" htmlFor="fmane" >
                Срок в годах
              </label><br />
              <input className="w-full lg:w-[280px] h-[50px] px-[16px] py-[12px] gap-[10px] border-[1px]  opacity-[0px] mt-2" type="number" placeholder="Введите срок" />
            </div>
            <div >
              <label className="font-[Jost] text-[16px] font-normal leading-[23.12px] text-left text-[#858585]" htmlFor="fmane" >
                Ставка (%)
              </label><br />
              <input className="w-full lg:w-[280px] h-[50px] px-[16px] py-[12px] gap-[10px] border-[1px]  opacity-[0px] mt-2" type="number" placeholder="Введите размер ставки" />
            </div>
          </div>
        </div>



        <div className="   box-border pl-[40px] " >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  " >
            <div >


              <h2 className="text-[#B3B3B3]  font-[Jost] text-[18px] font-normal leading-[26.01px] text-left">
                Ежемесячный платеж
              </h2>
              <p className="font-[Jost] text-[25px] font-medium leading-[36.13px] text-left text-[#333333] max-[640px]:text-[25px]  max-[640px]:leading-[28px]"> 4 410 y.e.</p>
            </div>
            <div >
              <h2 className="text-[#B3B3B3] font-[Jost] text-[18px] font-normal leading-[26.01px] text-left">
                Сумма кредита
              </h2>
              <p className="font-[Jost] text-[25px] font-medium leading-[36.13px] text-left text-[#333333]  max-[640px]:text-[25px]  max-[640px]:leading-[28px]"> 200 000 y.e.</p>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 " >
            <div >
              <h2 className="text-[#B3B3B3] font-[Jost] text-[18px] font-normal leading-[26.01px] text-left">
                Процентная ставка
              </h2>
              <p className="font-[Jost] text-[25px] font-medium leading-[36.13px] text-left text-[#333333]  max-[640px]:text-[25px]  max-[640px]:leading-[28px]"> 24%</p>
            </div>
            <div >
              <h2 className="text-[#B3B3B3] font-[Jost] text-[18px] font-normal leading-[26.01px] text-left">
                Дата последнего платежа
              </h2>
              <p className="font-[Jost] text-[25px] font-medium leading-[36.13px] text-left text-[#333333] max-[640px]:text-[25px]  max-[640px]:leading-[28px]"> 28 июля 2034 г</p>
            </div>
          </div>
        </div>

      </div>


      <button className="w-[232px] h-[49px] ml-10 mt-8 px-[16px] py-[12px] gap-[10px] bg-[#E1AF93] "> <span className="font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left text-[#FFFFFF]">Рассчитать</span></button>
    </div>
  )
}
