import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function Comments() {
    return (
        <div className="w-[1440px] ml-auto mr-auto mt-14 min-[320px]:w-[95%]" >
            <h2 className="text-[#000000] font-[Jost] lg:text-[55px] font-medium lg:leading-[70px] sm:text-[45px] sm:leading-[50px]  max-[640px]:text-[30px] max-[640px]:leading-[38px] text-left">Отзывы покупателей</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">

                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#EAEAEA]">
                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                    <div className="mt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"> <span className="text-[#E1AF93] font-[Jost] text-[18px] font-semibold leading-[26.01px] text-left">Читать полностью</span></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <h2 className="text-[#B3B3B3] font-[Jost] lg:text-[18px] font-normal lg:leading-[26.01px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]" >01.08.2024</h2>
                                    <h2 className="text-[#000000] font-[Jost] lg:text-[25px] font-medium lg:leading-[36.13px] text-left sm:text-[22px] sm:leading-[30px] max-[640px]:text-[20px] max-[640px]:leading-[26px]">Иванов Иван Иванович</h2>
                                    <p className="mt-4 text-[#333333] font-[Jost] sm:text-[20px] font-normal sm:leading-[28.9px] text-left max-[640px]:text-[16] max-[640]:leading-[23.12px]">Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!</p>

                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>



             

            </div>
        </div>
    )
}
