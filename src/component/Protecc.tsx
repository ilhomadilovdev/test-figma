
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function Protecc() {
  return (
    <div className="mt-56 w-[1440px] ml-auto mr-auto  min-[320px]:w-[90%]  max-[600px]:mt-20">
      <h2 className="text-[#333333] font-[Jost] text-[55px] font-medium leading-[70px] text-left max-[600px]:leading-[38px] max-[600px]:text-[30px]">Часто задаваемые вопросы</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger> <h2 className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Правила покупки недвижимости иностранцами</h2></AccordionTrigger>
          <AccordionContent>
            <p className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">
              Правила покупки недвижимости иностранцами зависят от страны. Обычно существуют требования и ограничения.
              Во многих странах иностранцы могут приобретать недвижимость только с разрешения местных властей или по специальной лицензии. Ограничения могут касаться типа недвижимости: например, иностранцы могут иметь право на покупку только жилых объектов, а не коммерческих или земельных. Также иностранцы должны иметь определенный юридический статус, как, например, резиденты или инвесторы. Часто требуется подтверждение финансовой состоятельности и источников доходов, а также могут быть дополнительные налоги или сборы при покупке. Процесс покупки может включать юридические и административные шаги, такие как нотариальное оформление и регистрация права собственности. В некоторых странах существуют ограничения по регионам или зонам, где иностранцы могут приобретать недвижимость. Для точной информации лучше обратиться
              к местным юридическим специалистам или агентствам недвижимости</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger><h2 className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Минимальная сумма инвестиций</h2></AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger><h2 className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left">Процедура оформления сделки</h2></AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger><h2 className="text-[#333333] font-[Jost] text-[20px] font-normal leading-[28.9px] text-left" >Стоимость обслуживания и коммунальные платежи</h2></AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

  )
}
