import Contact from "@/component/Contact";
import Partnyor from "@/component/Partnyor";
import { df, dfr, fg } from "@/images/img/images";


export default function Boglanish() {


    return (
        <div className="w-[1440px] mt-20 ml-auto mr-auto">
            <h2 className=" text-[#E1AF93] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Свяжитесь с нами: </h2>
            <h2 className="text-[#000000] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Ваше идеальное жилье <br /> всего в одном шаге</h2>


            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <img src={df} alt="rasm" />
                <img src={dfr} alt="rasm" />
                <img src={fg} alt="rasm" />
            </div>

            <div className="mt-14 ">
                <iframe className="border-none w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.03271722235!2d54.897828656500074!3d25.075658395396648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1724232570792!5m2!1sen!2s" width="600" height="550" loading="lazy"></iframe>
            </div>


            <Partnyor />

            <Contact />
        </div>
    )
}
