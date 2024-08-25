import { kky, ky, kyi, yi, yit } from "@/images/img/images";

export default function Galery() {
    return (
        <div className="w-[1440px] ml-auto mr-auto mt-8">
            <h2 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left">Фотогалерея и видеотуры</h2>

            <div className="flex justify-between mt-12 w-[32%]">
                <div className="w-[91px] h-[53px] ">
                    <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                        <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Все</p></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="w-[165px] h-[53px] ">
                    <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                        <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Фотографии</p></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="w-[156px] h-[53px] ">
                    <select className="form-select bg-[#EDF3F5] hover:bg-[#E1AF93] " aria-label="Default select example">
                        <option selected><p className="text-[#000000] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Видеотуры</p></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
              
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <img className="h-80" src={kky} alt="rasm" />
                <img className="h-80" src={ky} alt="rasm" />
                <img className="h-80" src={kyi} alt="rasm" />
                <img className="h-80" src={yi} alt="rasm" />
                <img className="h-80" src={yit} alt="rasm" />
                <img className="h-80" src={kky} alt="rasm" />
                <img className="h-80" src={yi} alt="rasm" />
                <img className="h-80" src={yit} alt="rasm" />
                <img className="h-80" src={kky} alt="rasm" />
            </div>
        </div>
    )
}
