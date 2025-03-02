import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from '@/components/ui/card'

export default function FaqSection() {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <h1 className='text-7xl font-serif'>Frequently Asked Questions</h1>
      <Card className='mt-20 p-5 w-[800px] rounded-4xl border border-border bg-secondary/30 backdrop-blur-lg supports-[backdrop-filter]:bg-secondary/50'>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className='bg-background px-4 rounded-2xl border-border border mb-5'>
        <AccordionTrigger className='text-2xl cursor-pointer'>How long does it take to complete a 1-page and 5-page website?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className='bg-background px-4 rounded-2xl border-border border my-5'>
        <AccordionTrigger className='text-2xl cursor-pointer'>Do you offer ongoing support and maintenance services?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className='bg-background px-4 rounded-2xl border-border border mt-5'>
        <AccordionTrigger className='text-2xl cursor-pointer'>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className='bg-background px-4 rounded-2xl border-border border mt-5'>
        <AccordionTrigger className='text-2xl cursor-pointer'>Are there any additional costs I should be aware of?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className='bg-background px-4 rounded-2xl border-border border mt-5'>
        <AccordionTrigger className='text-2xl cursor-pointer'>Do you offer website re-design services? </AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </Card>
    </div>
  )
}
