import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importo stilizimet e Bootstrap
import Button from './components/Button';
import Courses from './components/Courses';


import { coursesDB } from './db/CoursesDB';
import {currenciesDB} from './db/currenciesDB';
import { CurrencyContext } from './context/Currencies-context';

document.body.style.backgroundColor = "#282c34"
document.body.style.color = "#eee"
export default function Store() {
  const [currency, setCurrency]=useState(currenciesDB.Euro)
  return (
<CurrencyContext.Provider value={currency}>
<div className='container p-1'>
        <h4 className='mb-4'>Change currency</h4>
    { Object.values(currenciesDB).map((cur)=>(  
      <Button 
      key={cur.label}
      text={cur.code}
      btnClass={'btn-light btn-sm'} 
      onClick={()=>setCurrency(cur)}/>

    ))   }
<header className='text-center my-4'>
    <h1 className="title fs-xl">Course</h1>
    <h2 className="text-uppercase mb-2">Become a web developer</h2>
   <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repellat non aut, fugit nam id consequuntur, qui esse architecto natus earum dignissimos molestias unde nobis numquam veritatis debitis inventore cum?</p>
    </header>  

<Courses list={coursesDB}/>
     </div>



</CurrencyContext.Provider>
    
  )
}
