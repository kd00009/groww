import React from 'react'
import Divtext from './Divtext'

const Divtxt = () => {
    const text = [
        {
            id: 1,
            text : "sip calculator"
        },
        {
            id: 2,
            text : "lumpsum calculator"
        },
        {
            id: 3,
            text : "swp calculator"
        },
        {
            id: 3,
            text : "swp calculator"
        },
        {
            id : 4,
            text : "mutual fund calculator"
        },
        {
            id : 5,
            text : "ppf fund calculator"
        },{
            id : 6,
            text : "epf fund calculator"
        },
        {
            id : 7,
            text : "fd  calculator"
        },{
            id : 8,
            text : "rd  calculator"
        },{
            id : 9,
            text : "emi  calculator"
        },{
            id : 10,
            text : "income tax calculator"
        }

    ]
  return (
    <>
       <h6 className='border-solid border-1 border-gray-200 mb-0 pl-3'>popular calculators</h6>
        {text.map((item) => (
            <Divtext key={item.id} item={item}/>
        ))}
        </>
  )
}

export default Divtxt