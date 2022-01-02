import React, { useEffect, useState } from 'react';
import AccordionItem from './AccordionItem';

function FAQ ({font}) {
  const accordionData = [
    {
      title: 'Who is eligile to apply for this program?',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'What if I am younger than 13 in 2022 or older than 23 in 2022?',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Can I still aim to go to the Olympics in 2032, even if I don’t try out in the QAS TID Program.',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
      title: 'If I get offered a chance to try a new sport through this TID program, does this mean that I have to give up the sports that I am doing already?',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
      title: 'I noticed that my region isn’t on the testing list. Can I still participate?',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
      title: 'Do I have to relocate from my home and region to join this Talent Development program?',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
      title: 'Can athletes with a disability also participate in this program?',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
  ];

  return (
    <section 
      className="flex flex-col container-fluid min-h-max py-12 lg:px-24 xl:py-24 xl:px-64 text-center"
      style={{
        background: 'url("/assets/faq-bg.png"), rgba(240, 83, 77, 0.9)', 
        backgroundSize: 'cover'
      }}
    >
      <div className="flex justify-center text-center p-2">
        <h1 className={`${font === 'font-guthen' ? 'text-5xl xl:text-6xl' : 'text-4xl xl:text-5xl font-bold'} text-white mb-2 ${font}`}>FAQs</h1>
      </div>
      <div className="flex flex-col justify-center text-center p-4">
        <div className="accordion w-full mb-5" id="accordionExample">
          {accordionData.map(({ title, content }, index) => (
            <AccordionItem key={index} title={title} content={content} />
          ))}
        </div>
        <div className='w-full px-12'>
          <h1 className='text-left text-xl text-white font-normal'>
            <span className='font-bold'>Questions?</span><br />
            Contact the Queensland Academy of Sport via email <a href="mailto:Youfor2032@dtis.qld.gov.au" className="underline underline-offset-1" style={{textDecoration: 'underline'}}>Youfor2032@dtis.qld.gov.au</a>
          </h1>
        </div>
      </div>
    </section> 
  )
}

export default FAQ;