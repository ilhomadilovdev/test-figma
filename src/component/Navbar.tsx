import { Link } from "react-router-dom"
import { call, call2, call3, call4 } from "@/images/img/images.jsx"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import logo from "@/images/logo.png"
import { SelectLabel } from "@radix-ui/react-select"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Navbar() {


  return (
    <div className=" p-0 box-border  flex justify-between w-[1440px] ml-auto mr-auto  mt-2 h-14  min-[320px]:w-[90%] " >
      <Link className="w-44 h-[60px] min-[320px]:w-36 min-[320px]:h-[48px]" to={"/"}>
        <img src={logo} alt="rasm" />
      </Link>


      <div className={`flex justify-between lg:flex hidden `}>
        <Select>
          <SelectTrigger className="w-[107px] h-12">
            <SelectValue placeholder="Услуги" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Услуги</SelectLabel>
              <SelectItem value="apple">App</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Link className="w-16 h-12 p-2.5 gap-1" to={"/ocompany"}>
          <h2 className="font-[Jost]
      text-[16px]
      font-normal
     leading-[28.9px]
     text-left">О нас</h2></Link>
        <Link className="w-14 h-12 p-2.5 gap-1" to={"/ocompany"}> <h2 className="font-[Jost]
      text-[16px]
      font-normal
     leading-[28.9px]
     text-left">Блог</h2></Link>
        <Link className="w-24 h-12 p-2.5 gap-1" to={"/connect"}> <h2 className="font-[Jost]
      text-[16px]
      font-normal
     leading-[28.9px]
     text-left">Контакты</h2></Link>
      </div>


      <div className="flex justify-between ">
        <div className="flex justify-between">
          <img className="w-12 h-12 mr-1" src={call2} alt="rasml" />
          <img className="w-12 h-12 mr-1" src={call3} alt="rasm" />
          <img className="w-11 h-11 mr-1" src={call} alt="rasm" />
        </div>

        <div className="style">
          <select name="pets" id="pet-select">
            <option value="">Ru</option>
            <option value="dog">Ru</option>
            <option value="cat">Uzb</option>
            <option value="hamster">En</option>

          </select>
        </div>
      </div>

      <div className={`lg:hidden md:block`}>
        <Sheet  >
          <SheetTrigger asChild>
            <img src={call4} alt="rasm" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>

       </SheetTitle>
              <SheetDescription>
                 <div className={` `}>
        <Select>
          <SelectTrigger className="w-[107px] h-12">
            <SelectValue placeholder="Услуги" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Услуги</SelectLabel>
              <SelectItem value="apple">App</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Link className="w-16 h-12 p-2.5 gap-1" to={"/ocompany"}>
          <h2 className="font-[Jost]
      text-[16px]
      font-normal
     leading-[28.9px]
     text-left">О нас</h2></Link>
        <Link className="w-14 h-12 p-2.5 gap-1" to={"/ocompany"}> <h2 className="font-[Jost]
      text-[16px]
      font-normal
     leading-[28.9px]
     text-left">Блог</h2></Link>
        <Link className="w-24 h-12 p-2.5 gap-1" to={"/connect"}> <h2 className="font-[Jost]
      text-[16px]
      font-normal
     leading-[28.9px]
     text-left">Контакты</h2></Link>
      </div>

              </SheetDescription>
            </SheetHeader>

            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>


    </div>
  )
}
