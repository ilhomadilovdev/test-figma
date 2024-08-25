
import { catr, catur, cfg, crf, csrf, kkk, stt, ttf, tty, ttyx, uul, uulu, uuu } from "@/images/img/images"
import { Link } from "react-router-dom"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



export default function States() {
  return (
    <div className="mt-14 w-[1440px] ml-auto mr-auto min-[90%]">
      <h2 className=" text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Популярные статьи</h2>
      <div className=" mt-4 lg:flex justify-between hiden sm:block ">
        <Link to={"/state:id"}><img className="" src={stt} alt="rasm" /></Link>
        <div className="w-[32.4%] ">
          <img  src={csrf} alt="rasm" />
          <img className="mt-4 " src={crf} alt="rasm" />
        </div>
      </div>




      <div className="mt-72">
        <h2 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Статьи</h2>
        <div >
          <div className="flex justify-between">
            <div className="flex justify-between mt-12 w-[67%]">
              <div className="w-[144px] h-[53px] ">
                <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                  <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Все</p></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="w-[144px] h-[53px] ">
                <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                  <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >О недвижимости</p></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="w-[180px] h-[53px] ">
                <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                  <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Инвесторам</p></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="w-[254px] h-[53px] ">
                <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                  <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Покупка недвижимости</p></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="w-[194px] h-[53px] ">
                <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                  <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Обзоры районов</p></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>


            <div className="mt-12">
              <select className="form-select  " aria-label="Default select example">
                <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Сортировать</p></option>
                <option value="1">По дате: сначала новые</option>
                <option value="2">По дате: сначала старые</option>
                <option value="3">По популярности</option>
              </select>

            </div>
          </div>


          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <img src={catr} alt="rasm" />
              <img src={catur} alt="rasm" />
              <img src={cfg} alt="rasm" />
            </div>


            <div className=" mt-12 grid grid-cols-1  md:grid-cols-2 gap-2">
              <img src={tty} alt="rasm" />
              <img src={ttyx} alt="rasm" />
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <img src={uuu} alt="rasm" />
              <img src={uul} alt="rasm" />
              <img src={uulu} alt="rasm" />
            </div>
            <div className="mt-12 grid grid-cols-1  md:grid-cols-2 gap-2">
              <img src={ttf} alt="rasm" />
              <img src={kkk} alt="rasm" />

            </div>


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
    </div>
  )
}
