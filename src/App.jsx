 import React from 'react'
import Store from './Store'
import Courses from './components/Courses'
import { coursesDB } from './db/CoursesDB'
 
 export default function App() {
   return (
     <div>
       <Store/>
       {/* <Courses list={coursesDB}/> */}
     </div>
   )
 }
 
 
