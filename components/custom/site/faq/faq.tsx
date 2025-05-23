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
    <div className='flex z-[500] flex-col justify-center items-center h-full w-full px-4 sm:px-0'>
      <h1 className='text-3xl sm:text-4xl md:text-7xl font-serif text-center'>Frequently Asked Questions</h1>
      
      <Card className='mt-6 sm:mt-10 md:mt-20 p-3 sm:p-5 w-full max-w-[800px] rounded-2xl sm:rounded-4xl border border-border bg-secondary/30 backdrop-blur-lg supports-[backdrop-filter]:bg-secondary/50'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className='bg-background px-2 sm:px-4 rounded-xl sm:rounded-2xl border-border border mb-3 sm:mb-5'>
            <AccordionTrigger className='text-base sm:text-lg md:text-2xl cursor-pointer'>
              How long does it take to complete a 1-page and 5-page website?
            </AccordionTrigger>
            <AccordionContent className='text-sm sm:text-base md:text-xl text-muted-foreground'>
              It typically takes about 48 hours for a 1-page website and 1-2 weeks for a 5-page website. Rest assured, we prioritize efficiency without compromising quality to deliver your website in a timely manner.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className='bg-background px-2 sm:px-4 rounded-xl sm:rounded-2xl border-border border my-3 sm:my-5'>
            <AccordionTrigger className='text-base sm:text-lg md:text-2xl cursor-pointer'>
              Do you offer ongoing support and maintenance services?
            </AccordionTrigger>
            <AccordionContent className='text-sm sm:text-base md:text-xl text-muted-foreground'>
              Yes, we provide 1 month of free support and maintenance. After that, we can arrange a custom maintenance plan for you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className='bg-background px-2 sm:px-4 rounded-xl sm:rounded-2xl border-border border mt-3 sm:mt-5'>
            <AccordionTrigger className='text-base sm:text-lg md:text-2xl cursor-pointer'>
              What happens if I&apos;m not satisfied with the final product?
            </AccordionTrigger>
            <AccordionContent className='text-sm sm:text-base md:text-xl text-muted-foreground'>
              We strive for 100% customer satisfaction. If you are not satisfied with the final product, we will work with you to make the necessary adjustments until you are happy.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className='bg-background px-2 sm:px-4 rounded-xl sm:rounded-2xl border-border border mt-3 sm:mt-5'>
            <AccordionTrigger className='text-base sm:text-lg md:text-2xl cursor-pointer'>
              Are there any additional costs I should be aware of?
            </AccordionTrigger>
            <AccordionContent className='text-sm sm:text-base md:text-xl text-muted-foreground'>
              Yes. There may be additional costs for premium features or third-party integrations. We will provide a detailed breakdown of any potential costs before starting the project.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className='bg-background px-2 sm:px-4 rounded-xl sm:rounded-2xl border-border border mt-3 sm:mt-5'>
            <AccordionTrigger className='text-base sm:text-lg md:text-2xl cursor-pointer'>
              Do you offer free services?
            </AccordionTrigger>
            <AccordionContent className='text-sm sm:text-base md:text-xl text-muted-foreground'>
              No. We do not offer free services. However, we do provide a free consultation to discuss your project and see how we can help you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className='bg-background px-2 sm:px-4 rounded-xl sm:rounded-2xl border-border border mt-3 sm:mt-5'>
            <AccordionTrigger className='text-base sm:text-lg md:text-2xl cursor-pointer'>
              Do I need to pay any upfront amount?
            </AccordionTrigger>
            <AccordionContent className='text-sm sm:text-base md:text-xl text-muted-foreground'>
              Yes, we require a min 30% upfront payment to start the project. The remaining amount shall be paid as per the agreed-upon milestones.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className='bg-background px-2 sm:px-4 rounded-xl sm:rounded-2xl border-border border mt-3 sm:mt-5'>
            <AccordionTrigger className='text-base sm:text-lg md:text-2xl cursor-pointer'>
              Can I choose developers from your team to hire on my project?
            </AccordionTrigger>
            <AccordionContent className='text-sm sm:text-base md:text-xl text-muted-foreground'>
              Yes, you can choose developers from our team to hire on your project. We will work with you to find the best fit for your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  )
}