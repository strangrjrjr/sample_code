import React from 'react'

export default function LoaderHOC(WrappedComponent) {
  return (
    class LoaderHOC extends React.Component{
      isLoaded = () => {
        console.log(this.props)
        return this.props.students.length > 0
      }
      render(){
        return(
          this.isLoaded() ? <WrappedComponent {...this.props} /> : <h3> This page is still loading....</h3>
        )
      }
    }
  )
}