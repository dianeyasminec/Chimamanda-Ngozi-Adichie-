import React from 'react'
import { Button } from 'react-bootstrap';

export default function Cards(props) {

    const {title, 
    description,
link} = props;

  return (
    <>

<div className='col-lg-4 col-md-6 col-sm-12 col-xl-4 col-xxl-4  '>
      <div className='card h-95 shadow rounded my-4'>
        <div className='card-body lead'>
     <div className='d-flex justify-content-evenly '>
     
     </div>
   <h3 className='card-title'>{title}</h3>
   <p className=''>{description}</p>
   <div className='d-grid justify-content-end mt-'>
    <Button target="_blank" rel="noopener noreferrer"
     variant="outline-dark lead" href={link}>Buy</Button>
   </div>

  </div>
    </div>
    </div>

    </>
  )
}
