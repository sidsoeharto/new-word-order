import React, { useEffect, useState } from 'react';

function AccordionItem({title, content}) {
  const [isAccordActive, setIsAccordActive] = useState(false);

  return (
    <div 
      className="accordion-item my-3"
      style={{borderRadius: '3px'}}
    >
        <h2 className="accordion-header mb-0" id="headingOne">
          <button
            className="
              accordion-button
              flex
              items-center
              w-full
              py-5
              px-4
              lg:py-10
              lg:px-8
              text-base lg:text-lg text-white text-left
              font-medium
              border-0
              rounded-none
              transition
              focus:outline-none
            "
            style={{
              backgroundColor: (isAccordActive ? '#BA3A3A' : 'rgba(186, 58, 58, 0.2)'),
            }}
            type="button"
            onClick={() => setIsAccordActive(!isAccordActive)}
          >
            <span className='mr-8 text-lg lg:text-xl font-bold'>Q.</span> {title}
          </button>
        </h2>
        { isAccordActive 
          && 
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div 
              className="accordion-body bg-white flex flex-row py-5 px-4 lg:py-10 lg:px-8 text-left text-base lg:text-lg"
              style={{color: "#696969"}}
            >
              <div className='mr-8 font-bold text-lg lg:text-xl'> 
                <span style={{color: '#BA3A3A'}}>A.</span>
              </div>
              <div className="pr-8">
                {content}
              </div>
            </div>
          </div>
        }
    </div>
  )
}

export default AccordionItem;