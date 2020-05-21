import React from 'react'

function Student(props){
  return <div> 
    <h3> {props.student.name}</h3>
    {/* <h4>{props.student.motto}</h4> */}
    <img src={props.student.imgage_url}/>
  </div>
}

export default Student;