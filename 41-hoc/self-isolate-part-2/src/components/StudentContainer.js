import React from 'react'
import Student from './Student'
import LoaderHOC from '../hocs/LoaderHOC'


function StudentContainer(props) {
  // console.log("Student Container", props)
  return <div>
     {
       props.students.map( (student, index) => (
         <Student student={student} key={index}/>
       ))
     }
  </div>
}

export default LoaderHOC(StudentContainer);