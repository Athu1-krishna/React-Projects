import React, { useState } from 'react'
import data from './data'
import './accordion.css'
const Accordion = () => {
    const [accordionId, setAccordionId] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multipleId, setMultipleId] = useState([]);
    // console.log(multipleId);
    
    // console.log(enableMultiSelect);
    
    // single accordion selection
    const handleSingleSelection = (currentId) => {
        setAccordionId(accordionId==currentId? null : currentId);
    }
    // multiple accordion selection
    const handleMultiSelection = (currentId) => {
        let multipleAccordion = [...multipleId];
        const checkIdMultiple = multipleAccordion.indexOf(currentId);
        if(checkIdMultiple==-1){
            multipleAccordion.push(currentId);
        }else{
            multipleAccordion.splice(checkIdMultiple,1);
        }
        setMultipleId(multipleAccordion);
    }
  return (
    <>
        <div className='wrapper'>
            <button onClick={()=>setEnableMultiSelect(!enableMultiSelect)}>Enable Multi Selection</button>
            {
                data?.length>0?
                data.map((item)=>(
                    <div key={item?.id} className='accordion'>
                        <div onClick={enableMultiSelect ? () => handleMultiSelection(item?.id) : () => handleSingleSelection(item?.id)} className="accordion-title">
                            <h3 className="title">{item?.question} </h3><span>+</span>
                        </div>
                        {
                            enableMultiSelect?
                                multipleId.indexOf(item?.id)!==-1 && 
                                <div className='accordion-body'>
                                    {item?.answer}
                                </div>
                            :
                                accordionId == item?.id &&
                                <div className='accordion-body'>
                                    {item?.answer}
                                </div>
                        }
                    </div>
                ))
                :
                <div>
                    No data available
                </div>
            }
        </div>
    </>
  )
}

export default Accordion