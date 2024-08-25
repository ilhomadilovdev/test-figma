import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { obj, obj2, obj3, obj4, obj5, obj6, obj7, obj8} from "@/images/img/images"


export default function Build() {
  return (
    <>
      <div className="w-[1440px] ml-auto mr-auto min-[320px]:w-[95%] ">
        <h2 className=" mt-20 text-[#333333] font-[Jost] lg:text-[55px] font-medium lg:leading-[70px] text-left sm:text-[45px] sm:leading-[50px] max-[640px]:text-[30px]  max-[640px]:leading-[38px]">Квартиры</h2>
        <div className="flex justify-between">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12 w-[67%]">
            <div className=" h-[53px] ">
              <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Район</p></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="h-[53px] ">
              <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                <option selected><p className="text-[#000000] font-[Jost] lg:text-[20px] font-normal lg:leading-[28.9px] text-left" >Цена</p></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className=" h-[53px] ">
              <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Тип жилья</p></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className=" h-[53px] ">
              <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Количество комнат</p></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="h-[53px] ">
              <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Срок сдачи</p></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

        
        </div>


        <div >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src={obj} alt="rasm" />
            <img src={obj2} alt="rasm" />
            <img src={obj3} alt="rasm" />
            <img src={obj4} alt="rasm" />
            <img src={obj5} alt="rasm" />
            <img src={obj6} alt="rasm" />
            <img src={obj7} alt="rasm" />
            <img src={obj8} alt="rasm" />
            <img src={obj} alt="rasm" />
          </div>
          <div className="flex justify-between mt-20">
            <div className="flex justify-between w-96">
              <h2 className="text-[#858585] font-[Jost] text-[18px] font-normal leading-[26.01px] text-left">Показывать на странице:</h2>
              <div className="w-15 h-6 ">
                <select className="form-select bg-[#EDF3F5] " aria-label="Default select example">
                  <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >10</p></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

      </div>


      <div className=" mt-40 bg-[#EDF3F5]">
        <div className="w-[1440px] ml-auto mr-auto min-[320px]:w-[95%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-[70%] mt-20">
            <h2 className="text-[#333333] font-[Jost] lg:text-[55px] font-medium lg:leading-[70px] text-left sm:text-[45px] sm:leading-[50px] max-[640px]:text-[30px] max-[640px]:leading-[38px]">Оцените или сдайте вашу недвижимость в аренду с легкостью</h2>
            <p className=" mt-10 text-[#858585] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Получите профессиональную оценку вашей недвижимости и <br /> начните зарабатывать, сдавая её в аренду. Наши эксперты <br /> помогут вам на каждом этапе</p>
          </div>
          <div className="  p-10 box-border w-[588px] h-[579px]">
            <div>
              <input className="  bg-[#EDF3F5] mt-10 w-[407px] h-[50px] px-0 py-[12px] gap-[10px] [border-bottom:1px_solid_#D6D6D6]" type="text" placeholder="ФИО" /><br />
              <input className="bg-[#EDF3F5] mt-6 w-[407px] h-[50px] px-0 py-[12px] gap-[10px] [border-bottom:1px_solid_#D6D6D6]" type="number" placeholder="Номер телефона" /><br />
              <input className="bg-[#EDF3F5] mt-6 w-[407px] h-[50px] px-0 py-[12px] gap-[10px] [border-bottom:1px_solid_#D6D6D6]" type="email" placeholder="E-mail" /><br />
              <textarea className=" bg-[#EDF3F5] mt-6 w-[407px] h-[50px] px-0 py-[12px] gap-[10px] [border-bottom:1px_solid_#D6D6D6]" name="comment" id="comment" placeholder="Ваш вопрос" rows={2} cols={30}></textarea><br />
              <button className=" bg-[#E1AF93] mt-16 w-[223px] h-[49px] px-[16px] py-[12px] "><span className=" text-[#FFFFFF] font-[Jost] text-[17px] font-semibold leading-[24.57px] text-left">Отправить</span></button>
            </div>
          </div>

        </div>
      </div>


    </>




  )
}
