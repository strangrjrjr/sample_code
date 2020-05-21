import React from 'react'
import Student from './Student'

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

export default StudentContainer;