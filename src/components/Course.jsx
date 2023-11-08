import React, {useState, useEffect} from 'react'
import Button from './Button'
import { CurrencyContext } from '../context/Currencies-context';


export default function Course({course}) {
    const currency = React.useContext(CurrencyContext)

    const { title, img, describe, price} =course;

    const contextPrice=new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:currency.code,
    }).format(price * currency.conversionRate)

    const [courseBG, setCourseBG]=useState()
    useEffect(()=>{
        if(currency.code === 'USD'){
            setCourseBG('card-dark')
        }
        if(currency.code === 'EUR'){
            setCourseBG('card-primary')
        }
        if(currency.code === 'GBP'){
            setCourseBG('card-danger')
        }
    }, [currency.code])

    console.log("Currency Code:", currency.code);

   
  return (
  <li className={`card ${courseBG} mb-2`} style={{width:250}}>
    <div className="card-header">{title}</div>
    <img src={img} alt="course img"style={{height:'100%'}} />
    {/* <p className="card-body">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Architecto assumenda, dolor fugiat similique ad dolores maxime.
     A sit officia quae 
     </p> */}
     <p className="card-body">{describe}</p>

     <div className="card-footer d-flex justify-content-between">
        <h4>{contextPrice}</h4>
        <Button btnClass={'btn-success'} text={'Buy'}/>
     </div>
  </li>
  )
}
